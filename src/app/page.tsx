"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="flex flex-col items-center space-y-8">
        {/* Grok Logo */}
        <div className="text-5xl font-bold">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM37.5 25C34.7386 25 32.5 27.2386 32.5 30C32.5 32.7614 34.7386 35 37.5 35C40.2614 35 42.5 32.7614 42.5 30C42.5 27.2386 40.2614 25 37.5 25ZM50 75C44.4772 75 40 70.5228 40 65C40 59.4772 44.4772 55 50 55C55.5228 55 60 59.4772 60 65C60 70.5228 55.5228 75 50 75ZM62.5 25C59.7386 25 57.5 27.2386 57.5 30C57.5 32.7614 59.7386 35 62.5 35C65.2614 35 67.5 32.7614 67.5 30C67.5 27.2386 65.2614 25 62.5 25Z"
              fill="white"
            />
          </svg>
          Grok
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl">
          <div className="relative flex items-center rounded-xl bg-gray-800 p-4">
            <Input
              placeholder="O que você quer saber?"
              className="w-full bg-transparent border-none focus:ring-0 text-white text-lg placeholder-gray-500"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM10 8V16L16 12L10 8Z"
                fill="currentColor"
              />
            </svg>
            DeepSearch
          </Button>
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                fill="currentColor"
              />
            </svg>
            Think
          </Button>
          <div className="flex items-center text-gray-400">
            Grok 3
            <svg
              className="ml-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
            </svg>
          </div>
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L12 20M20 12L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        {/* Categories */}
        <div className="flex space-x-4 mt-8">
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM10 16L16 10L10 16ZM14 10L10 14L14 10Z"
                fill="currentColor"
              />
            </svg>
            Editar imagem
          </Button>
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM5 4H19V20H5V4ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z"
                fill="currentColor"
              />
            </svg>
            Notícias mais recentes
          </Button>
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2ZM12 12C7.58172 12 4 15.5817 4 20H20C20 15.5817 16.4183 12 12 12Z"
                fill="currentColor"
              />
            </svg>
            Personalidades
            <svg
              className="ml-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM4 4H20V20H4V4ZM8 6H16V8H8V6ZM8 10H16V12H8V10ZM8 14H16V16H8V14Z"
                fill="currentColor"
              />
            </svg>
            Espaços de trabalho{" "}
            <span className="ml-2 text-xs bg-blue-500 px-2 py-0.5 rounded-full">
              Novo
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
