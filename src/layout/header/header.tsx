import { FC } from 'react'
import 'twin.macro'

const Header: FC = () => {
  return (
    <nav tw="sticky top-0 z-50 mx-auto max-w-screen-2xl border-b-2 shadow-sm backdrop-blur bg-white/70">
      <div tw="flex items-center justify-between px-2 py-2 sm:px-6 sm:py-3">
        <a href="#" tw="p-2">
          <svg
            width="134"
            height="40"
            viewBox="0 0 134 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.44 28V13.1H55.34V15.5H48.16V19.32H54.94V21.72H48.16V25.6H55.34V28H45.44ZM61.2545 28.24C60.0945 28.24 59.0812 27.9667 58.2145 27.42C57.3612 26.86 56.7745 26.1067 56.4545 25.16L58.4145 24.22C58.6945 24.8333 59.0812 25.3133 59.5745 25.66C60.0812 26.0067 60.6412 26.18 61.2545 26.18C61.7345 26.18 62.1145 26.0733 62.3945 25.86C62.6745 25.6467 62.8145 25.3667 62.8145 25.02C62.8145 24.8067 62.7545 24.6333 62.6345 24.5C62.5279 24.3533 62.3745 24.2333 62.1745 24.14C61.9879 24.0333 61.7812 23.9467 61.5545 23.88L59.7745 23.38C58.8545 23.1133 58.1545 22.7067 57.6745 22.16C57.2079 21.6133 56.9745 20.9667 56.9745 20.22C56.9745 19.5533 57.1412 18.9733 57.4745 18.48C57.8212 17.9733 58.2945 17.58 58.8945 17.3C59.5079 17.02 60.2079 16.88 60.9945 16.88C62.0212 16.88 62.9279 17.1267 63.7145 17.62C64.5012 18.1133 65.0612 18.8067 65.3945 19.7L63.3945 20.64C63.2079 20.1467 62.8945 19.7533 62.4545 19.46C62.0145 19.1667 61.5212 19.02 60.9745 19.02C60.5345 19.02 60.1879 19.12 59.9345 19.32C59.6812 19.52 59.5545 19.78 59.5545 20.1C59.5545 20.3 59.6079 20.4733 59.7145 20.62C59.8212 20.7667 59.9679 20.8867 60.1545 20.98C60.3545 21.0733 60.5812 21.16 60.8345 21.24L62.5745 21.76C63.4679 22.0267 64.1545 22.4267 64.6345 22.96C65.1279 23.4933 65.3745 24.1467 65.3745 24.92C65.3745 25.5733 65.2012 26.1533 64.8545 26.66C64.5079 27.1533 64.0279 27.54 63.4145 27.82C62.8012 28.1 62.0812 28.24 61.2545 28.24ZM72.348 28.12C71.1213 28.12 70.168 27.7867 69.488 27.12C68.8213 26.44 68.488 25.4867 68.488 24.26V19.46H66.608V17.12H66.808C67.3413 17.12 67.7546 16.98 68.048 16.7C68.3413 16.42 68.488 16.0133 68.488 15.48V14.64H71.108V17.12H73.608V19.46H71.108V24.12C71.108 24.48 71.168 24.7867 71.288 25.04C71.4213 25.2933 71.6213 25.4867 71.888 25.62C72.168 25.7533 72.5213 25.82 72.948 25.82C73.0413 25.82 73.148 25.8133 73.268 25.8C73.4013 25.7867 73.528 25.7733 73.648 25.76V28C73.4613 28.0267 73.248 28.0533 73.008 28.08C72.768 28.1067 72.548 28.12 72.348 28.12ZM78.9106 28.24C78.1506 28.24 77.4906 28.1133 76.9306 27.86C76.3706 27.6067 75.9373 27.2467 75.6306 26.78C75.324 26.3 75.1706 25.7467 75.1706 25.12C75.1706 24.52 75.304 23.9867 75.5706 23.52C75.8373 23.04 76.2506 22.64 76.8106 22.32C77.3706 22 78.0773 21.7733 78.9306 21.64L82.4906 21.06V23.06L79.4306 23.58C78.9106 23.6733 78.524 23.84 78.2706 24.08C78.0173 24.32 77.8906 24.6333 77.8906 25.02C77.8906 25.3933 78.0306 25.6933 78.3106 25.92C78.604 26.1333 78.964 26.24 79.3906 26.24C79.9373 26.24 80.4173 26.1267 80.8306 25.9C81.2573 25.66 81.584 25.3333 81.8106 24.92C82.0506 24.5067 82.1706 24.0533 82.1706 23.56V20.76C82.1706 20.2933 81.984 19.9067 81.6106 19.6C81.2506 19.28 80.7706 19.12 80.1706 19.12C79.6106 19.12 79.1106 19.2733 78.6706 19.58C78.244 19.8733 77.9306 20.2667 77.7306 20.76L75.5906 19.72C75.804 19.1467 76.1373 18.6533 76.5906 18.24C77.0573 17.8133 77.604 17.48 78.2306 17.24C78.8573 17 79.5373 16.88 80.2706 16.88C81.164 16.88 81.9506 17.0467 82.6306 17.38C83.3106 17.7 83.8373 18.1533 84.2106 18.74C84.5973 19.3133 84.7906 19.9867 84.7906 20.76V28H82.3106V26.14L82.8706 26.1C82.5906 26.5667 82.2573 26.96 81.8706 27.28C81.484 27.5867 81.044 27.8267 80.5506 28C80.0573 28.16 79.5106 28.24 78.9106 28.24ZM91.9769 28.12C90.7502 28.12 89.7969 27.7867 89.1169 27.12C88.4502 26.44 88.1169 25.4867 88.1169 24.26V19.46H86.2369V17.12H86.4369C86.9702 17.12 87.3835 16.98 87.6769 16.7C87.9702 16.42 88.1169 16.0133 88.1169 15.48V14.64H90.7369V17.12H93.2369V19.46H90.7369V24.12C90.7369 24.48 90.7969 24.7867 90.9169 25.04C91.0502 25.2933 91.2502 25.4867 91.5169 25.62C91.7969 25.7533 92.1502 25.82 92.5769 25.82C92.6702 25.82 92.7769 25.8133 92.8969 25.8C93.0302 25.7867 93.1569 25.7733 93.2769 25.76V28C93.0902 28.0267 92.8769 28.0533 92.6369 28.08C92.3969 28.1067 92.1769 28.12 91.9769 28.12ZM100.341 28.24C99.2209 28.24 98.2409 27.9867 97.4009 27.48C96.5609 26.9733 95.9076 26.2867 95.4409 25.42C94.9743 24.5533 94.7409 23.5933 94.7409 22.54C94.7409 21.4467 94.9743 20.48 95.4409 19.64C95.9209 18.7867 96.5676 18.1133 97.3809 17.62C98.2076 17.1267 99.1276 16.88 100.141 16.88C100.994 16.88 101.741 17.02 102.381 17.3C103.034 17.58 103.588 17.9667 104.041 18.46C104.494 18.9533 104.841 19.52 105.081 20.16C105.321 20.7867 105.441 21.4667 105.441 22.2C105.441 22.3867 105.428 22.58 105.401 22.78C105.388 22.98 105.354 23.1533 105.301 23.3H96.9009V21.3H103.821L102.581 22.24C102.701 21.6267 102.668 21.08 102.481 20.6C102.308 20.12 102.014 19.74 101.601 19.46C101.201 19.18 100.714 19.04 100.141 19.04C99.5943 19.04 99.1076 19.18 98.6809 19.46C98.2543 19.7267 97.9276 20.1267 97.7009 20.66C97.4876 21.18 97.4076 21.8133 97.4609 22.56C97.4076 23.2267 97.4943 23.82 97.7209 24.34C97.9609 24.8467 98.3076 25.24 98.7609 25.52C99.2276 25.8 99.7609 25.94 100.361 25.94C100.961 25.94 101.468 25.8133 101.881 25.56C102.308 25.3067 102.641 24.9667 102.881 24.54L105.001 25.58C104.788 26.1 104.454 26.56 104.001 26.96C103.548 27.36 103.008 27.6733 102.381 27.9C101.768 28.1267 101.088 28.24 100.341 28.24ZM107.427 28V17.12H109.887V19.54L109.687 19.18C109.94 18.3667 110.334 17.8 110.867 17.48C111.414 17.16 112.067 17 112.827 17H113.467V19.32H112.527C111.78 19.32 111.18 19.5533 110.727 20.02C110.274 20.4733 110.047 21.1133 110.047 21.94V28H107.427ZM116.228 32.42C115.934 32.42 115.648 32.3933 115.368 32.34C115.088 32.3 114.834 32.2267 114.608 32.12V29.92C114.781 29.96 114.988 30 115.228 30.04C115.481 30.08 115.714 30.1 115.928 30.1C116.528 30.1 116.961 29.96 117.228 29.68C117.508 29.4 117.754 29.0333 117.968 28.58L118.688 26.9L118.648 29.1L113.908 17.12H116.728L120.048 25.96H119.048L122.348 17.12H125.188L120.448 29.1C120.168 29.8067 119.828 30.4067 119.428 30.9C119.027 31.3933 118.561 31.7667 118.028 32.02C117.508 32.2867 116.908 32.42 116.228 32.42Z"
              fill="#100A55"
            />
            <path
              d="M33.3333 15.6134L26.2226 10.0828C25.5986 9.59731 24.8306 9.33374 24.04 9.33374C23.2494 9.33374 22.4813 9.59731 21.8573 10.0828L14.7453 15.6134C14.3179 15.9458 13.9721 16.3715 13.7343 16.8579C13.4965 17.3443 13.373 17.8787 13.3733 18.4201V28.0201C13.3733 28.7273 13.6542 29.4056 14.1543 29.9057C14.6544 30.4058 15.3327 30.6868 16.04 30.6868H32.04C32.7472 30.6868 33.4255 30.4058 33.9256 29.9057C34.4257 29.4056 34.7066 28.7273 34.7066 28.0201V18.4201C34.7066 17.3228 34.2 16.2868 33.3333 15.6134Z"
              fill="#EF233C"
              stroke="#EF233C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.3334 24C26.3867 25.7773 21.6107 25.7773 18.6667 24"
              stroke="#F9FAFB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <ul tw="hidden items-center justify-between space-x-6 lg:flex">
          <li>
            <a
              href="#"
              tw="relative px-2 py-1 font-medium text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-primary-default before:opacity-0 before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary-default after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:text-primary-default hover:before:w-full hover:before:opacity-100 hover:after:w-full hover:after:opacity-100"
            >
              {' '}
              Home{' '}
            </a>
          </li>
          <li>
            <a
              href="#"
              tw="relative px-2 py-1 font-medium text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-primary-default before:opacity-0 before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary-default after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:text-primary-default hover:before:w-full hover:before:opacity-100 hover:after:w-full hover:after:opacity-100"
            >
              {' '}
              Search{' '}
            </a>
          </li>
          <li>
            <a
              href="#"
              tw="relative px-2 py-1 font-medium text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-primary-default before:opacity-0 before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary-default after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:text-primary-default hover:before:w-full hover:before:opacity-100 hover:after:w-full hover:after:opacity-100"
            >
              {' '}
              About{' '}
            </a>
          </li>
          <li>
            <a
              href="#"
              tw="relative px-2 py-1 font-medium text-gray-700 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-primary-default before:opacity-0 before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary-default after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:text-primary-default hover:before:w-full hover:before:opacity-100 hover:after:w-full hover:after:opacity-100"
            >
              {' '}
              Contact{' '}
            </a>
          </li>
        </ul>

        <div tw="hidden items-center justify-center space-x-4 lg:flex">
          <button tw="whitespace-nowrap rounded-lg border-2 border-shade-92 px-4 py-1.5 font-medium text-primary-default shadow-md transition-all duration-300 hover:scale-105 hover:border-primary-default hover:bg-primary-default hover:text-white hover:shadow-lg active:scale-95">
            Sign in
          </button>
          <button tw="whitespace-nowrap rounded-lg border-2 border-transparent bg-primary-default px-4 py-1.5 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-lg active:scale-95">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
