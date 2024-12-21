import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from "next/navigation";

import { FiSearch } from 'react-icons/fi'

import { searchCourseByName } from '@/api/course.api';
import Link from 'next/link';

type Result = {
    slug: string,
    poster: string,
    courseName: string
}

export default function SearchBar() {
    const router = useRouter();
    const pathname = usePathname();

    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState<Result[]>([])
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        setShowResults(false);
    }, [pathname]);

    useEffect(() => {
        if (keyword.trim() === '') {
            setShowResults(false);
            return;
        }

        const timer = setTimeout(() => {
            fetchSearchResults(keyword.trim());
        }, 500);

        return () => clearTimeout(timer);
    }, [keyword]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (keyword.trim()) {
            router.push(`/search?key=${keyword}`);
            setShowResults(false);
        }
    };

    const fetchSearchResults = async (keyword: string) => {
        try {
            const data = await searchCourseByName(keyword)
            const courses = data.courses
            setResults(courses);
            setShowResults(courses.length > 0);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setShowResults(false);
        }
    }

    return (
        <form className="w-full relative" onSubmit={handleSubmit}>
            <input
                autoComplete="on" required
                name="key" id="text_search"
                value={keyword} type="text"
                className="block w-full px-4 py-2.5 text-sm text-gray-900 border border-solid border-gray-300 rounded-sm bg-gray-50 outline-none"
                placeholder="Tìm kiếm khóa học"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="absolute top-0 right-0 h-full pr-4">
                <FiSearch size={26} color="#969899" />
            </button>
            {showResults && (
                <div className='absolute bg-white top-[110%] right-0 left-0 border border-solid border-[#3333] rounded-sm overflow-hidden'>
                    <div className='w-full flex flex-col'>
                        {results.map((result, index) => (
                            <Link href={`/course/${result.slug}`} key={index} className='flex items-center gap-2 p-1 cursor-pointer hover:bg-[#003555] hover:text-white'>
                                <img src={result.poster} width={80} height={40} alt='' />
                                <h4>{result.courseName}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </form>
    )
}
