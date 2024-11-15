import React from 'react';

export default function Social_media_links() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
      <div className="flex text-sm flex-col items-start space-y-3">
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 text-gray-400 group-hover:text-blue-500"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.892 0 0 .892 0 1.975v20.05c0 1.083.892 1.975 1.975 1.975h11.495v-9.29H9.85v-3.63h3.62V8.6c0-3.57 2.11-5.56 5.41-5.56 1.56 0 3.18.29 3.18.29v3.6h-1.79c-1.76 0-2.31 1.09-2.31 2.21v2.79h3.56l-1.69 3.63h-1.87v9.29h3.75c1.083 0 1.975-.892 1.975-1.975V1.975c0-1.083-.892-1.975-1.975-1.975z"></path>
          </svg>
          <span className="text-gray-400 group-hover:text-blue-500">Facebook</span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 text-gray-400 group-hover:text-blue-500"
            viewBox="0 0 24 24"
          >
            <path d="M23.643 4.937a9.513 9.513 0 0 1-2.828.775A4.686 4.686 0 0 0 23 3.168a9.357 9.357 0 0 1-3.054 1.145 4.69 4.69 0 0 0-7.978 4.27A13.289 13.289 0 0 1 1.671 3.149a4.69 4.69 0 0 0 1.453 6.25A4.605 4.605 0 0 1 .96 8.623v.059a4.688 4.688 0 0 0 3.758 4.59 4.69 4.69 0 0 1-2.12.08c.61 1.91 2.384 3.297 4.476 3.338a9.423 9.423 0 0 1-5.836 2.01c-.382 0-.76-.022-1.13-.067a13.24 13.24 0 0 0 7.213 2.11c8.646 0 13.399-7.168 13.399-13.401 0-.205-.004-.41-.014-.615a9.47 9.47 0 0 0 2.388-2.419z"></path>
          </svg>
          <span className="text-gray-400 group-hover:text-blue-500">Twitter</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 text-gray-400 group-hover:text-pink-500"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.465c.637-.248 1.363-.415 2.427-.465C8.944 2.01 9.283 2 12 2z"
            />
          </svg>
          <span className="text-gray-400 group-hover:text-pink-500">Instagram</span>
        </a>
         {/* YouTube */}
         <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 text-gray-400 group-hover:text-red-600"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.006 3.006 0 0 0-2.117-2.123C19.478 3.482 12 3.482 12 3.482s-7.478 0-9.38.581A3.006 3.006 0 0 0 .504 6.186C0 8.09 0 12 0 12s0 3.91.504 5.814a3.006 3.006 0 0 0 2.117 2.123c1.902.581 9.379.581 9.379.581s7.478 0 9.381-.581a3.006 3.006 0 0 0 2.117-2.123C24 15.91 24 12 24 12s0-3.91-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
          <span className="text-gray-400 group-hover:text-red-600">YouTube</span>
        </a>

        {/* LinkedIn */}
        {/* <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 text-gray-400 group-hover:text-blue-700"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.715v-5.569c0-1.328-.024-3.038-1.852-3.038c-1.854 0-2.139 1.447-2.139 2.942v5.665H8.031V8.725h3.565v1.6h.05c.496-.937 1.704-1.927 3.509-1.927c3.749 0 4.442 2.467 4.442 5.668v6.386zM5.337 7.433c-1.2 0-2.173-.975-2.173-2.174c0-1.2.973-2.174 2.173-2.174c1.199 0 2.173.974 2.173 2.174c0 1.199-.974 2.174-2.173 2.174zm1.857 13.019H3.48V8.725h3.715v11.727zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451c.98 0 1.772-.774 1.772-1.728V1.729C24 .774 23.207 0 22.225 0z"></path>
          </svg>
          <span className="text-gray-400 group-hover:text-blue-700">LinkedIn</span>
        </a> */}

      </div>
    </div>
  );
}
