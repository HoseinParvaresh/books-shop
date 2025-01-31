import React from 'react'

export default function Svg() {
  return (
    <div>
      <svg className="hidden">
        <symbol id="magnifying-glass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </symbol>
        <symbol id="user" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </symbol>
        <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </symbol>
        <symbol id="eye" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </symbol>
        <symbol id="eye-slash" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
        </symbol>  
        <symbol id="device-phone-mobile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </symbol>
        <symbol id="device-tablet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z" />
        </symbol>
        <symbol id="clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </symbol>
        <symbol id="signal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </symbol>
        <symbol id="squares-plus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
        </symbol>
        <symbol id="newspaper" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
        </symbol>
        <symbol id="phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </symbol>
        <symbol id="user-group" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </symbol>
        <symbol id="chevron-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </symbol>
        <symbol id="bars-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </symbol>
        <symbol id="chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </symbol>
        <symbol id="arrows-right-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </symbol>
        <symbol id="star" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </symbol>
        <symbol id="home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </symbol>
        <symbol id="moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </symbol>
        <symbol id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </symbol>
        <symbol id="toman" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 57.988 55.588">
		<g transform="translate(-4013.907 176.406)">
			<path d="M4068.117-146.108s3,8.61,1.066,11.035-4.839,1.921-11.736,1.921-10.552.731-12.355-1.6-2.288-7.952,2.547-9.55,7.877,3.5,7.877,9.231.668,5.874-.732,8.36c-1.858,2.6-10.917,3.915-10.917,3.915"></path>
			<path d="M4069.56-152.461v3.969" transform="translate(0 -1.945)"></path>
			<path d="M4069.56-152.461v3.969" transform="translate(-7 -1.945)"></path>
			<path d="M4069.56-152.461v3.969" transform="translate(-7 -1.945)"></path>
			<path d="M4027.592-128.435s5.376,4.632,8.167,3.124a5.918,5.918,0,0,0,3.034-6.158c-.446-4.24-4.144-5.625-6.783-4.418s-4.016,5.866-4.016,5.866-1.857,4.934-6.114,4.934-4.928-2.6-5-4.934-.98-19.76-.98-19.76"></path>
			<path d="M4069.56-152.461v3.969" transform="translate(-44 -23.945)"></path>
			<path d="M4017.55-171.009s-3.525,12.094,2.454,15.619c5.623,3.035,12.585-.714,12.585-.714s3.473-2.1,3.436-4.864c-.089-3.883-1.651-12.986-1.651-12.986"></path>
		</g>
	    </symbol>
        <symbol id="academic-cap" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
	    </symbol>
        <symbol id="pencil" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </symbol>
        <symbol id="tag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </symbol>
        <symbol id='numbered-list' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
        </symbol>
        <symbol id='calendar-days' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </symbol>
        <symbol id="book-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </symbol>
        <symbol id='language' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </symbol>
        <symbol id='sparkles' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
        </symbol>
        <symbol id='user-group-mini' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
        </symbol>
        <symbol id='star-mini' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
        </symbol>
        <symbol id='document-text-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </symbol>
        <symbol id='arrow-left-circle-mini ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <g clipPath="url(#a)">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z" clipRule="evenodd" />
            </g>
            <defs>
                <clipPath id="a">
                <path d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </symbol>
        <symbol id='chat-bubble-left-right-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
        </symbol>
        <symbol id='user-mini' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
        </symbol>
        <symbol id='chat-bubble-bottom-center-text' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </symbol>
        <symbol id='no-comment' width="112" height="100" viewBox="0 0 112 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.4673 95.4392C81.407 95.4392 101.625 75.1677 101.625 50.1616C101.625 25.1555 81.407 4.88403 56.4673 4.88403C31.5276 4.88403 11.3099 25.1555 11.3099 50.1616C11.3099 75.1677 31.5276 95.4392 56.4673 95.4392Z" fill="#EAEEF9"></path>
            <g filter="url(#filter0_d_2116_9611)">
                <path d="M30.9357 38.9429H80.8178C82.7259 38.9429 84.3614 40.4916 84.3614 42.4958V74.0171C84.3614 75.9302 82.8168 77.57 80.8178 77.57H30.9357C29.0277 77.57 27.3922 76.0213 27.3922 74.0171V42.4958C27.3922 40.5827 29.0277 38.9429 30.9357 38.9429Z" fill="#CED7E2"></path>
            </g>
            <path d="M109.016 38.8497C110.424 37.5599 110.522 35.3702 109.236 33.9588C107.95 32.5474 105.766 32.4488 104.358 33.7386C102.95 35.0284 102.852 37.2181 104.139 38.6295C105.425 40.0409 107.609 40.1395 109.016 38.8497Z" fill="#EAEEF9"></path>
            <path d="M109.272 23.4583C109.864 22.9152 109.906 21.9932 109.364 21.3989C108.822 20.8047 107.903 20.7632 107.31 21.3062C106.718 21.8493 106.676 22.7713 107.218 23.3656C107.759 23.9598 108.679 24.0013 109.272 23.4583Z" fill="#EAEEF9"></path>
            <path d="M72.5953 2.15555C73.0028 1.78219 73.0312 1.14832 72.6589 0.739758C72.2865 0.331197 71.6543 0.302661 71.2468 0.676022C70.8394 1.04938 70.8109 1.68325 71.1833 2.09182C71.5556 2.50038 72.1878 2.52891 72.5953 2.15555Z" fill="#EAEEF9"></path>
            <path d="M102.458 22.3447L90.0099 44.4822C89.5556 45.211 88.6469 45.4844 87.9201 45.0289L66.6589 32.639C65.932 32.1835 65.6594 31.2726 66.1137 30.5438L82.4685 2.30227C82.9228 1.57345 83.8314 1.30006 84.5583 1.75557L100.004 10.7746L102.458 22.3447Z" fill="white"></path>
            <path d="M99.9134 10.6835L96.37 16.6963C95.9157 17.6074 96.1882 18.6097 97.006 19.1563L102.367 22.2536" fill="#CED7E2"></path>
            <path d="M22.5919 12.6879L36.8569 27.5373C37.3112 28.0839 37.3111 28.8127 36.7659 29.3593L22.2283 43.1158C21.6832 43.5713 20.9563 43.5712 20.4111 43.0246L2.3301 23.8025C1.8758 23.2559 1.87589 22.527 2.42105 21.9804L12.9607 12.05L22.5919 12.6879Z" fill="white"></path>
            <path d="M12.9607 11.9592L16.8677 16.0588C17.4129 16.6054 18.3215 16.6054 18.9575 16.0588L22.5919 12.5967" fill="#CED7E2"></path>
            <path d="M59.6627 36.1014L54.1202 55.8702C53.9385 56.5079 53.2116 56.9633 52.5756 56.69L33.4041 51.042C32.7681 50.8597 32.3139 50.1308 32.5864 49.493L40.0369 24.0757C40.2186 23.438 40.9455 22.9826 41.5815 23.2559L55.4831 27.3555L59.6627 36.1014Z" fill="white"></path>
            <path d="M55.4831 27.4465L53.8476 32.9126C53.6658 33.6414 54.1202 34.4613 54.8471 34.7346L59.6627 36.1919" fill="#CED7E2"></path>
            <path d="M104.637 69.8797L86.5157 79.7024C85.9291 80.0172 85.1006 79.8137 84.8622 79.1667L75.8002 61.4734C75.4958 60.8901 75.7119 60.0558 76.3608 59.8062L99.8822 47.4099C100.469 47.0952 101.298 47.2983 101.536 47.9453L108.104 60.7776L104.637 69.8797Z" fill="white"></path>
            <path d="M108.009 60.8404L102.933 63.4815C102.281 63.8596 101.999 64.7573 102.3 65.4691L104.545 69.9386" fill="#CED7E2"></path>
            <path d="M85.2852 59.2412V74.8196C85.2852 76.8239 83.6497 78.4637 81.6508 78.4637H30.4056C28.4067 78.4637 26.7712 76.8239 26.7712 74.8196V57.9658" stroke="#1676EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            <g filter="url(#filter1_d_2116_9611)">
                <path d="M83.3121 49.2656H65.731C64.0566 49.2656 62.3823 49.8687 61.0885 50.9237L56.4458 54.6918C55.1519 55.7469 53.4776 56.3499 51.8033 56.3499H31.7867C29.8078 56.3499 28.1334 57.9324 28.1334 59.9671C28.1334 60.1178 28.1335 60.3441 28.2096 60.4948L31.8627 79.7871C32.1671 81.5958 33.6893 82.9524 35.5159 82.9524H78.1367C79.9633 82.9524 81.4855 81.6712 81.7899 79.8625L86.8892 53.4859C87.1936 51.5265 85.8998 49.6425 83.8448 49.3411C83.6926 49.2657 83.4643 49.2656 83.3121 49.2656Z" fill="white"></path>
            </g>
            <g filter="url(#filter2_d_2116_9611)">
                <path d="M88.1925 45.7578H67.2038C65.2049 45.7578 63.2061 46.4868 61.6615 47.7622L56.1189 52.3173C54.5743 53.5927 52.5755 54.3217 50.5766 54.3217H26.6804C24.3181 54.3217 22.3191 56.2347 22.3191 58.6944C22.3191 58.8766 22.3192 59.1501 22.41 59.3323L26.7711 82.654C27.1346 84.8405 28.9518 86.4805 31.1325 86.4805H82.014C84.1946 86.4805 86.0119 84.9317 86.3753 82.7452L92.4629 50.8596C92.8263 48.491 91.2817 46.2134 88.8285 45.849C88.6468 45.7579 88.3743 45.7578 88.1925 45.7578Z" fill="white"></path>
            </g>
            <path d="M47.4874 69.9909C48.742 69.9909 49.7589 68.9712 49.7589 67.7133C49.7589 66.4555 48.742 65.4358 47.4874 65.4358C46.2329 65.4358 45.2159 66.4555 45.2159 67.7133C45.2159 68.9712 46.2329 69.9909 47.4874 69.9909Z" fill="#111827"></path>
            <path d="M65.296 69.8998C66.5505 69.8998 67.5675 68.8801 67.5675 67.6223C67.5675 66.3644 66.5505 65.3447 65.296 65.3447C64.0415 65.3447 63.0245 66.3644 63.0245 67.6223C63.0245 68.8801 64.0415 69.8998 65.296 69.8998Z" fill="#111827"></path>
            <path d="M61.298 73.7261H60.117C59.1176 71.6307 56.5734 70.8108 54.5745 71.9041C53.7567 72.2685 53.1207 72.9973 52.7573 73.7261H51.576C52.5755 70.993 55.6649 69.6266 58.2998 70.6287C59.6627 71.1753 60.7529 72.2685 61.298 73.7261Z" fill="#111827"></path>
            <path d="M97.4035 84.5896C97.1308 85.7747 96.7671 86.8687 96.3125 87.9627C96.2216 88.2362 96.1306 88.4185 95.9488 88.692C94.4031 91.7004 91.9483 94.1618 88.9479 95.6204C88.5842 95.8027 88.2205 95.985 87.9477 96.0762C85.0382 97.2613 81.7651 97.7171 78.4919 96.9878C69.8544 95.1646 64.3082 86.6864 66.1266 78.0259C67.945 69.3654 76.4007 63.8044 85.0382 65.6277C88.1296 66.2658 90.8572 67.8156 93.1302 70.0035C96.9489 73.7412 98.5855 79.3022 97.4035 84.5896Z" fill="#EF4444"></path>
            <path d="M87.9967 84.4409L84.6126 81.0439L87.9965 77.647C88.6887 76.9521 88.7657 75.794 87.9967 75.0219C87.3045 74.3271 86.1508 74.2501 85.3817 75.0221L81.9978 78.419L78.6137 75.0219C77.9216 74.3271 76.7678 74.2501 75.9988 75.0221C75.2297 75.7942 75.2299 76.8747 75.9989 77.6468L79.383 81.0439L75.9988 84.4411C75.3066 85.136 75.2299 86.2937 75.9989 87.0658C76.6911 87.7606 77.8445 87.838 78.6135 87.066L81.9978 83.6687L85.3819 87.0658C86.074 87.7606 87.2274 87.838 87.9965 87.066C88.7656 86.2939 88.6888 85.1358 87.9967 84.4409Z" fill="white"></path>
            <path d="M60.0854 16.3492L57.4813 13.7351L60.0853 11.1211C60.6179 10.5864 60.6772 9.69512 60.0854 9.10102C59.5528 8.56632 58.6649 8.50706 58.0731 9.10116L55.4691 11.7152L52.865 9.10102C52.3323 8.56632 51.4445 8.50706 50.8527 9.10116C50.2609 9.69526 50.261 10.5268 50.8528 11.1209L53.457 13.7351L50.8527 16.3493C50.32 16.884 50.261 17.775 50.8528 18.3691C51.3855 18.9038 52.273 18.9633 52.8648 18.3692L55.4691 15.7549L58.0732 18.3691C58.6059 18.9038 59.4934 18.9633 60.0853 18.3692C60.6771 17.7751 60.618 16.8839 60.0854 16.3492Z" fill="#EF4444"></path>
            <path d="M15.5864 62.0829L13.5957 60.0846L15.5863 58.0865C15.9934 57.6777 16.0388 56.9965 15.5864 56.5423C15.1792 56.1336 14.5005 56.0883 14.0481 56.5424L12.0576 58.5406L10.067 56.5423C9.65983 56.1336 8.98116 56.0883 8.52876 56.5424C8.07636 56.9966 8.07647 57.6322 8.52887 58.0863L10.5195 60.0846L8.52876 62.083C8.1216 62.4917 8.07647 63.1728 8.52887 63.6269C8.93603 64.0357 9.61448 64.0812 10.0669 63.627L12.0576 61.6287L14.0482 63.6269C14.4554 64.0357 15.1339 64.0812 15.5863 63.627C16.0387 63.1729 15.9935 62.4916 15.5864 62.0829Z" fill="#EF4444"></path>
            <defs>
                <filter id="filter0_d_2116_9611" x="5.39221" y="27.9429" width="100.969" height="82.6272" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="11"></feOffset>
                    <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2116_9611"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2116_9611" result="shape"></feBlend>
                </filter>
                <filter id="filter1_d_2116_9611" x="23.1334" y="39.2656" width="68.8" height="43.6868" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="-5"></feOffset>
                    <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2116_9611"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2116_9611" result="shape"></feBlend>
                </filter>
                <filter id="filter2_d_2116_9611" x="0.319092" y="34.7578" width="114.197" height="84.7227" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="11"></feOffset>
                    <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2116_9611"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2116_9611" result="shape"></feBlend>
                </filter>
            </defs>
		</symbol>
        <symbol id='users' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </symbol>
        <symbol id='chevron-left-mini' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </symbol>
        <symbol id='percent-badge' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </symbol>
        <symbol id='currency-dollar' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </symbol>
        <symbol id='finger-print' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
        </symbol>
        <symbol id='map' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </symbol>
        <symbol id='paint-brush' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </symbol>
        <symbol id='scale' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </symbol>
        <symbol id='flag' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
        </symbol>
        <symbol id='question-mark-circle' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </symbol>
        <symbol id='exclamation-circle' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </symbol>
        <symbol id='lock-closed' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </symbol>
        <symbol id='envelope' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </symbol>
        <symbol id='folder-open' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
        </symbol>
        <symbol id='x-circle' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </symbol>
        <symbol id='check-circle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </symbol>
        <symbol id='chat-bubble-left-right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </symbol>
        <symbol id='power' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
        </symbol>
        <symbol id='squares-2x2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </symbol>
        <symbol id='wallet' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
        </symbol>
        <symbol id='pencil-square' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </symbol>
        <symbol id='arrow-left-on-rectangle-mini' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clipRule="evenodd" />
        </symbol>
        <symbol id='book-buy'  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.0349 8.91504H40.184C40.0567 8.91504 39.9346 8.96561 39.8446 9.05563C39.7546 9.14564 39.704 9.26774 39.704 9.39504C39.704 9.52234 39.7546 9.64443 39.8446 9.73445C39.9346 9.82447 40.0567 9.87504 40.184 9.87504H42.0343C42.9111 9.87504 43.6234 10.531 43.6234 11.3381V34.5925C43.6234 35.3989 42.9104 36.0555 42.0343 36.0555H5.96514C5.08834 36.0555 4.37602 35.3995 4.37602 34.5925V11.3381C4.37602 10.5317 5.08898 9.87504 5.96514 9.87504H8.3229C8.4502 9.87504 8.57229 9.82447 8.66231 9.73445C8.75232 9.64443 8.8029 9.52234 8.8029 9.39504C8.8029 9.26774 8.75232 9.14564 8.66231 9.05563C8.57229 8.96561 8.4502 8.91504 8.3229 8.91504H5.96514C4.5597 8.91504 3.41602 10.0018 3.41602 11.3381V34.5925C3.41602 35.9288 4.5597 37.0155 5.96514 37.0155H42.0343C43.4397 37.0155 44.5834 35.9288 44.5834 34.5925V11.3381C44.5834 10.0018 43.4403 8.91504 42.0349 8.91504ZM33.2618 41.4501H29.7904V39.42C29.7904 39.2927 29.7398 39.1706 29.6498 39.0806C29.5598 38.9906 29.4377 38.94 29.3104 38.94C29.1831 38.94 29.061 38.9906 28.971 39.0806C28.881 39.1706 28.8304 39.2927 28.8304 39.42V41.9301C28.8304 42.195 29.0455 42.4101 29.3104 42.4101H33.2618C33.5306 42.4101 33.7495 42.629 33.7495 42.8978V43.5102C33.7495 43.779 33.5306 43.9966 33.2618 43.9966H14.6506C14.5866 43.9967 14.5233 43.9842 14.4641 43.9598C14.405 43.9354 14.3513 43.8996 14.306 43.8544C14.2607 43.8093 14.2248 43.7556 14.2002 43.6966C14.1757 43.6375 14.163 43.5742 14.1629 43.5102V42.8978C14.1629 42.629 14.3811 42.4101 14.6499 42.4101H18.6019C18.7292 42.4101 18.8513 42.3595 18.9413 42.2695C19.0314 42.1795 19.0819 42.0574 19.0819 41.9301V39.42C19.0819 39.2927 19.0314 39.1706 18.9413 39.0806C18.8513 38.9906 18.7292 38.94 18.6019 38.94C18.4746 38.94 18.3525 38.9906 18.2625 39.0806C18.1725 39.1706 18.1219 39.2927 18.1219 39.42V41.4501H14.6493C14.2657 41.4508 13.898 41.6035 13.6268 41.8749C13.3557 42.1463 13.2032 42.5141 13.2029 42.8978V43.5102C13.2036 43.8936 13.3562 44.2611 13.6273 44.5323C13.8984 44.8034 14.2659 44.956 14.6493 44.9566H33.2605C33.6442 44.9565 34.0122 44.8041 34.2837 44.5329C34.5553 44.2618 34.7081 43.894 34.7088 43.5102V42.8978C34.7085 42.5139 34.5558 42.1459 34.2844 41.8745C34.013 41.6031 33.6456 41.4504 33.2618 41.4501Z" fill="#22C55E"></path>
            <path d="M13.8974 3.78868C13.5838 3.91348 13.3726 4.22516 13.3726 4.56372V21.0917C13.3722 21.2151 13.3995 21.3369 13.4524 21.4483C13.5053 21.5598 13.5825 21.6579 13.6784 21.7356C13.7742 21.8132 13.8862 21.8684 14.0062 21.8971C14.1261 21.9258 14.251 21.9272 14.3716 21.9013C15.5428 21.6479 19.7028 20.9951 24.0036 23.1416C24.2276 23.2549 24.5022 23.26 24.7364 23.1423C29.0462 20.9919 33.2439 21.6511 34.4298 21.9026C34.5503 21.9282 34.675 21.9265 34.7948 21.8976C34.9145 21.8688 35.0262 21.8134 35.1218 21.7357C35.2174 21.658 35.2943 21.5599 35.347 21.4486C35.3997 21.3372 35.4268 21.2155 35.4263 21.0924V4.56372C35.4263 4.22452 35.2151 3.91284 34.9009 3.78804C29.8353 1.77588 25.402 4.40116 24.3729 5.09044C23.3514 4.40052 18.9585 1.77716 13.8974 3.78868ZM34.4663 4.64884V20.9304C33.0244 20.645 28.7575 20.0882 24.3703 22.2527C21.1914 20.684 17.4673 20.309 14.3326 20.9285V4.64884C19.0506 2.82228 23.1306 5.39508 23.9038 5.93396C24.1854 6.12852 24.5514 6.13108 24.8362 5.93652C25.619 5.39764 29.7425 2.821 34.4663 4.64884Z" fill="#22C55E"></path>
            <path d="M37.604 5.76904H36.7099C36.5826 5.76904 36.4605 5.81961 36.3705 5.90963C36.2804 5.99965 36.2299 6.12174 36.2299 6.24904C36.2299 6.37635 36.2804 6.49844 36.3705 6.58845C36.4605 6.67847 36.5826 6.72904 36.7099 6.72904H37.1233V23.89C37.1233 23.9521 37.0986 24.0117 37.0547 24.0556C37.0108 24.0996 36.9512 24.1242 36.8891 24.1242H11.908C11.8459 24.1241 11.7865 24.0993 11.7427 24.0554C11.6989 24.0115 11.6744 23.952 11.6744 23.89V6.96328C11.6744 6.83464 11.7793 6.72968 11.908 6.72968H12.2862C12.4135 6.72968 12.5356 6.67911 12.6256 6.58909C12.7156 6.49908 12.7662 6.37699 12.7662 6.24968C12.7662 6.12238 12.7156 6.00029 12.6256 5.91027C12.5356 5.82025 12.4135 5.76968 12.2862 5.76968H11.9086C11.5921 5.77002 11.2886 5.89586 11.0647 6.11962C10.8409 6.34337 10.7149 6.64677 10.7144 6.96328V23.8913C10.7144 24.5492 11.25 25.0849 11.908 25.0849H36.8897C37.2063 25.0845 37.5099 24.9586 37.7338 24.7347C37.9577 24.5108 38.0836 24.2073 38.084 23.8906V6.24904C38.084 6.12174 38.0334 5.99965 37.9434 5.90963C37.8534 5.81961 37.7313 5.76904 37.604 5.76904Z" fill="#22C55E"></path>
            <path d="M23.6011 7.38039V20.3167C23.6011 20.444 23.6517 20.5661 23.7417 20.6561C23.8317 20.7461 23.9538 20.7967 24.0811 20.7967C24.2084 20.7967 24.3305 20.7461 24.4205 20.6561C24.5105 20.5661 24.5611 20.444 24.5611 20.3167V7.38039C24.5611 7.25309 24.5105 7.131 24.4205 7.04098C24.3305 6.95096 24.2084 6.90039 24.0811 6.90039C23.9538 6.90039 23.8317 6.95096 23.7417 7.04098C23.6517 7.131 23.6011 7.25309 23.6011 7.38039ZM27.8667 9.37975C28.41 9.14999 30.0273 8.61879 30.9835 8.91575C31.1052 8.95326 31.2368 8.94089 31.3494 8.88136C31.462 8.82183 31.5463 8.72001 31.5838 8.59831C31.6213 8.47661 31.6089 8.34499 31.5494 8.23241C31.4899 8.11982 31.3881 8.0355 31.2664 7.99799C29.7867 7.53975 27.5864 8.45559 27.4936 8.49527C26.9163 8.73847 27.2734 9.62935 27.8667 9.37975ZM31.2664 11.1238C29.7848 10.6649 27.5864 11.5807 27.4936 11.6198C26.9144 11.8649 27.2766 12.7538 27.866 12.5049C28.41 12.2764 30.0292 11.7471 30.9828 12.0415C31.1045 12.079 31.2362 12.0667 31.3487 12.0071C31.4613 11.9476 31.5456 11.8458 31.5832 11.7241C31.6207 11.6024 31.6083 11.4707 31.5488 11.3582C31.4892 11.2456 31.3881 11.1613 31.2664 11.1238ZM26.851 16.8927C26.8753 16.8799 29.363 15.6601 32.4728 15.9052C32.7268 15.9148 32.9668 15.7273 32.988 15.4636C33.0091 15.1999 32.8107 14.9682 32.5464 14.9478C29.1672 14.6892 26.5336 15.9782 26.4228 16.0332C26.3089 16.0901 26.2221 16.1899 26.1818 16.3107C26.1414 16.4315 26.1506 16.5634 26.2075 16.6774C26.2643 16.7913 26.3642 16.8781 26.485 16.9184C26.6058 16.9588 26.737 16.9496 26.851 16.8927ZM18.2596 10.4774C19.2126 10.1836 20.8331 10.7122 21.3771 10.9414C21.9691 11.1903 22.3281 10.3007 21.7502 10.0562C21.6574 10.0172 19.4584 9.10263 17.9768 9.56023C17.8578 9.5999 17.759 9.68456 17.7017 9.79611C17.6443 9.90765 17.6329 10.0372 17.6699 10.1571C17.7069 10.2769 17.7893 10.3776 17.8995 10.4374C18.0097 10.4973 18.139 10.5116 18.2596 10.4774ZM22.2993 14.4697C22.1886 14.4146 19.5544 13.1244 16.1758 13.3836C15.9115 13.4047 15.7137 13.6351 15.7342 13.8994C15.7547 14.1638 15.9934 14.3564 16.2494 14.341C19.3534 14.0978 21.8462 15.3164 21.8712 15.3286C21.9846 15.3815 22.1142 15.3881 22.2324 15.3468C22.3506 15.3056 22.448 15.2198 22.5038 15.1078C22.5597 14.9958 22.5695 14.8663 22.5313 14.7471C22.4931 14.6279 22.4099 14.5284 22.2993 14.4697ZM41.0065 30.8082C41.0065 30.6809 40.9559 30.5588 40.8659 30.4688C40.7759 30.3788 40.6538 30.3282 40.5265 30.3282H7.34572C7.21842 30.3282 7.09633 30.3788 7.00631 30.4688C6.91629 30.5588 6.86572 30.6809 6.86572 30.8082C6.86572 30.9355 6.91629 31.0576 7.00631 31.1476C7.09633 31.2377 7.21842 31.2882 7.34572 31.2882H40.5265C40.6538 31.2882 40.7759 31.2377 40.8659 31.1476C40.9559 31.0576 41.0065 30.9355 41.0065 30.8082ZM21.4795 33.061C21.3522 33.061 21.2301 33.1116 21.1401 33.2016C21.0501 33.2916 20.9995 33.4137 20.9995 33.541C20.9995 33.6683 21.0501 33.7904 21.1401 33.8804C21.2301 33.9705 21.3522 34.021 21.4795 34.021H26.4331C26.5604 34.021 26.6825 33.9705 26.7725 33.8804C26.8625 33.7904 26.9131 33.6683 26.9131 33.541C26.9131 33.4137 26.8625 33.2916 26.7725 33.2016C26.6825 33.1116 26.5604 33.061 26.4331 33.061H21.4795Z" fill="#22C55E"></path>
        </symbol>
        <symbol id='all-ticket' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5149_5552)">
                            <mask id="mask0_5149_5552" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                <path d="M0 0.000137329H47.9999V48H0V0.000137329Z" fill="white"></path>
                            </mask>
                            <g mask="url(#mask0_5149_5552)">
                                <path d="M17.2778 37.0498V33.4941C17.2778 32.2451 18.782 31.1476 20.6025 30.5258M27.193 30.4593C29.1009 31.0677 30.7221 32.1973 30.7221 33.4941V37.0498" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M10.2329 46.5317H37.7644V41.0466H10.2329V46.5317Z" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M0.703125 38.6072V33.8662C0.703125 32.5614 1.67578 31.4692 2.93277 31.2832M10.2328 39.4655V46.5317H0.703125V41.7908" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M47.2966 38.6072V33.8662C47.2966 32.5774 46.3478 31.4985 45.1148 31.2912M37.7642 39.4655V46.5317H47.2966V41.7908" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M8.05922 31.2563C8.65706 31.2616 9.24703 31.5354 9.63506 32.0482L13.4112 37.0496H18.2532C19.3561 37.0496 20.2516 37.9451 20.2516 39.0479C20.2516 40.1535 19.3561 41.0464 18.2532 41.0464H12.4201C12.1113 41.0463 11.8068 40.9745 11.5305 40.8366C11.2543 40.6987 11.0138 40.4985 10.8281 40.2519L7.71094 36.1247" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M40.047 31.2563C39.4118 31.2298 38.774 31.5035 38.3622 32.0482L34.5859 37.0496H29.7466C28.6412 37.0496 27.7456 37.9451 27.7456 39.0479C27.7456 40.1535 28.6412 41.0464 29.7466 41.0464H35.5772C35.8863 41.0463 36.1912 40.9745 36.4679 40.8367C36.7446 40.6988 36.9855 40.4986 37.1717 40.2519L40.2861 36.1247" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M8.04078 16.465H20.0845C22.043 16.465 23.6455 14.8627 23.6455 12.904V5.02738C23.6455 3.07148 22.043 1.46892 20.0845 1.46892H4.64986C2.69114 1.46892 1.08887 3.07148 1.08887 5.02738V12.904C1.08887 14.8627 2.69114 16.465 4.64986 16.465V19.856L8.04078 16.465Z" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M28.7662 19.1701H32.8985L36.2894 22.561V19.1701C37.7643 19.1701 38.9709 17.9609 38.9709 16.486V9.71479C38.9709 8.23983 37.7643 7.03336 36.2894 7.03336H23.6453M18.7661 16.4648C18.7661 17.953 19.9566 19.1701 21.4501 19.1701H25.5826" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M5.8584 8.96547H18.8748M5.8584 12.6646H12.3667M5.8584 5.2662H18.8748" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M27.6659 28.3838C27.6659 30.4699 25.9571 32.1787 23.871 32.1787C21.7849 32.1787 20.0762 30.4699 20.0762 28.3838V24.3178C20.0762 23.1486 21.0329 22.1945 22.2022 22.1945H27.6659V28.3838Z" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1.67334 28.3838C1.67334 30.4699 3.38212 32.1787 5.46823 32.1787C7.55426 32.1787 9.26304 30.4699 9.26304 28.3838V24.3178C9.26304 23.1486 8.30632 22.1945 7.13979 22.1945H3.79658C2.63006 22.1945 1.67334 23.1486 1.67334 24.3178V28.3838Z" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M46.324 28.3838C46.324 30.4699 44.6178 32.1787 42.5317 32.1787C40.4431 32.1787 38.7368 30.4699 38.7368 28.3838V24.3178C38.7368 23.1486 39.6908 22.1945 40.8602 22.1945H44.2007C45.3698 22.1945 46.324 23.1486 46.324 24.3178V28.3838Z" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1.67334 28.5168C5.31402 29.6356 6.21767 27.3394 6.32379 25.2401C6.32379 25.2401 7.5836 26.4172 9.26304 25.7955" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M46.324 28.5168C42.6831 29.6356 41.7797 27.3394 41.6761 25.2401C41.6761 25.2401 40.4137 26.4172 38.7368 25.7955" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M20.0762 25.543H27.6659" stroke="#FBBF24" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_5149_5552">
                                <rect width="48" height="48" rx="4" fill="white"></rect>
                            </clipPath>
                        </defs>
        </symbol>
        <symbol id='credit'  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5149_5579)">
                            <path d="M45.7118 28.115H44.9935V21.6449C44.9935 20.6206 44.4837 19.7136 43.7051 19.1626V18.2816C43.7051 17.0037 42.6655 15.9641 41.3876 15.9641H40.8512L42.9033 12.9529C43.5912 11.9435 43.3296 10.5627 42.3203 9.87476L28.3955 0.385382C27.9066 0.0521011 27.3173 -0.0708989 26.7357 0.0394449C26.4496 0.0928348 26.1769 0.202439 25.9335 0.361913C25.69 0.521387 25.4806 0.727563 25.3174 0.968507L13.2986 18.605H9.95404L10.7609 10.4366C10.77 10.3445 10.8299 10.2648 10.9133 10.2334C11.9529 9.84138 12.8538 9.10938 13.4501 8.17226C13.497 8.09848 13.5856 8.05629 13.6773 8.06557L18.9231 8.58382C19.0125 8.59265 19.1027 8.58378 19.1887 8.55774C19.2746 8.53169 19.3546 8.48896 19.4241 8.432C19.4935 8.37504 19.5511 8.30496 19.5934 8.22576C19.6358 8.14656 19.6621 8.0598 19.6709 7.97041C19.6798 7.88103 19.6709 7.79079 19.6449 7.70483C19.6188 7.61888 19.5761 7.5389 19.5191 7.46945C19.4622 7.40001 19.3921 7.34246 19.3129 7.3001C19.2337 7.25774 19.1469 7.2314 19.0575 7.22257L13.8118 6.70432C13.2029 6.6447 12.6222 6.92529 12.2959 7.43791C11.8575 8.12698 11.1951 8.6651 10.4308 8.95329C9.85541 9.17023 9.46035 9.68698 9.3996 10.3021L8.57948 18.6049H7.70732L8.98345 5.68582C9.02938 5.22082 9.44442 4.8792 9.90998 4.92579L20.5107 5.97298C20.6912 5.9908 20.8714 5.93619 21.0116 5.82116C21.1519 5.70612 21.2407 5.54008 21.2585 5.35957C21.2763 5.17906 21.2217 4.99886 21.1067 4.85861C20.9917 4.71836 20.8256 4.62955 20.6451 4.61173L10.0444 3.56454C8.82904 3.44463 7.7422 4.33573 7.6221 5.55129L6.59348 15.9641H4.84176C3.56395 15.9641 2.52426 17.0037 2.52426 18.2816V18.8825C1.47885 19.3639 0.750977 20.4206 0.750977 21.6449V44.96C0.750977 46.6363 2.11466 48 3.79101 48H41.9535C43.6298 48 44.9935 46.6363 44.9935 44.96V38.49H45.7118C46.5597 38.49 47.2494 37.8003 47.2494 36.9525V29.6526C47.2495 28.8048 46.5597 28.115 45.7118 28.115ZM41.3876 17.3321C41.9113 17.332 42.3372 17.758 42.3372 18.2817V18.6302C42.2099 18.6138 42.0818 18.6054 41.9535 18.6051H39.0515L39.919 17.3321H41.3876ZM26.4478 1.73876C26.5102 1.6466 26.5903 1.56774 26.6834 1.50674C26.7766 1.44573 26.8809 1.4038 26.9903 1.38335C27.0996 1.36233 27.212 1.3632 27.321 1.38591C27.43 1.40861 27.5333 1.45271 27.6252 1.51563L41.5499 11.005C41.936 11.2682 42.0361 11.7964 41.7731 12.1824L37.3963 18.6049H36.3459L38.4917 15.4561C38.8397 14.9454 38.8684 14.2955 38.5664 13.7599C38.1649 13.0484 38.0022 12.2105 38.1081 11.4006C38.1869 10.7981 37.9217 10.2099 37.4162 9.86548L30.1977 4.94623C29.6921 4.6017 29.0476 4.5701 28.5157 4.86382C27.8009 5.25851 26.9615 5.41348 26.1524 5.30023C25.5524 5.21604 24.9439 5.48698 24.6011 5.98995L16.0043 18.6049H14.9539L26.4478 1.73876ZM26.749 13.3535C23.7704 13.3535 21.3254 15.676 21.1262 18.6049H17.6594L25.7312 6.76029H25.7313C25.7535 6.72751 25.7832 6.7006 25.8181 6.68187C25.8529 6.66314 25.8917 6.65315 25.9313 6.65276C25.9417 6.65276 25.9521 6.65351 25.9625 6.65491C27.0629 6.80885 28.2044 6.59829 29.1767 6.06138C29.2532 6.01901 29.3515 6.0251 29.4272 6.07666L36.6459 10.996C36.7214 11.0476 36.763 11.1368 36.7517 11.2234C36.6076 12.3249 36.8291 13.4644 37.375 14.432C37.4188 14.5098 37.4134 14.6093 37.3615 14.6857L34.6907 18.6049H32.372C32.1726 15.676 29.7277 13.3535 26.749 13.3535ZM31.0004 18.605H22.4977C22.6936 16.4311 24.5249 14.7215 26.749 14.7215C28.9731 14.7214 30.8045 16.4311 31.0004 18.605ZM3.89216 18.2816C3.89216 17.7579 4.31807 17.3319 4.84176 17.3319H6.45838L6.33266 18.6049H3.89216V18.2816ZM2.11888 21.6449C2.11888 20.7229 2.86898 19.9729 3.79101 19.9729H41.9535C42.8756 19.9729 43.6256 20.7229 43.6256 21.6449V23.5428H2.11888V21.6449ZM43.6256 44.96C43.6256 45.882 42.8756 46.6321 41.9535 46.6321H3.79101C2.86898 46.6321 2.11888 45.882 2.11888 44.96V43.0622H5.8072C5.89701 43.0622 5.98594 43.0445 6.06892 43.0101C6.15189 42.9757 6.22728 42.9254 6.29079 42.8619C6.3543 42.7984 6.40467 42.723 6.43904 42.64C6.47341 42.557 6.4911 42.4681 6.4911 42.3783C6.4911 42.2884 6.47341 42.1995 6.43904 42.1165C6.40467 42.0336 6.3543 41.9582 6.29079 41.8947C6.22728 41.8312 6.15189 41.7808 6.06892 41.7464C5.98594 41.712 5.89701 41.6944 5.8072 41.6944H2.11888V24.9107H43.6256V28.115H37.1224C35.0734 28.115 33.2985 29.3094 32.4562 31.0383C32.4534 31.0441 32.4502 31.0497 32.4473 31.0555C32.4402 31.0702 32.434 31.0855 32.427 31.1003C32.3267 31.3134 32.2395 31.534 32.1686 31.7616L32.168 31.7635C32.0131 32.2618 31.9345 32.7807 31.9349 33.3025C31.9349 36.1629 34.262 38.49 37.1223 38.49H43.6255V41.6944H10.1866C10.0968 41.6944 10.0079 41.712 9.92491 41.7464C9.84194 41.7808 9.76655 41.8312 9.70304 41.8947C9.63953 41.9582 9.58916 42.0336 9.55479 42.1165C9.52042 42.1995 9.50273 42.2884 9.50273 42.3783C9.50273 42.4681 9.52042 42.557 9.55479 42.64C9.58916 42.723 9.63953 42.7984 9.70304 42.8619C9.76655 42.9254 9.84194 42.9757 9.92491 43.0101C10.0079 43.0445 10.0968 43.0622 10.1866 43.0622H43.6256V44.96ZM45.8816 36.9524C45.8816 37.0459 45.8055 37.1221 45.7118 37.1221H37.1226C35.6746 37.1221 34.4122 36.3122 33.7647 35.1216C33.6758 34.9585 33.5991 34.7889 33.5352 34.6144C33.385 34.2051 33.303 33.7632 33.303 33.3025C33.3026 32.7296 33.4315 32.1641 33.6802 31.648C33.7071 31.5924 33.7352 31.5375 33.7647 31.4834C34.4122 30.2929 35.6746 29.4829 37.1226 29.4829H45.7118C45.8054 29.4829 45.8816 29.5591 45.8816 29.6526V36.9524Z" fill="#0EA5E9"></path>
                            <path d="M37.2828 30.5273C35.7526 30.5273 34.5078 31.7722 34.5078 33.3023C34.5078 34.8324 35.7526 36.0772 37.2828 36.0772C38.813 36.0772 40.0578 34.8324 40.0578 33.3023C40.0578 31.7722 38.813 30.5273 37.2828 30.5273ZM37.2828 34.7093C36.5069 34.7093 35.8757 34.0781 35.8757 33.3023C35.8757 32.5266 36.5069 31.8952 37.2828 31.8952C38.0587 31.8952 38.6899 32.5265 38.6899 33.3023C38.6899 34.0782 38.0587 34.7093 37.2828 34.7093Z" fill="#0EA5E9"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_5149_5579">
                                <rect width="48" height="48" rx="4" fill="white"></rect>
                            </clipPath>
                        </defs>
        </symbol>
        <symbol id='bookmark' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0,0,348,348">
            <g fill="#ed4444" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(4,4)"><path d="M17,2c-1.30078,0 -2.40234,0.83984 -2.81641,2h-2.18359c-2.20703,0 -4,1.79297 -4,4v48c0,2.20703 1.79297,4 4,4h41c1.65234,0 3,-1.34766 3,-3v-46c0,-1.65234 -1.34766,-3 -3,-3h-1v-1c0,-1.65234 -1.34766,-3 -3,-3h-19.18359c-0.41406,-1.16016 -1.51562,-2 -2.81641,-2zM17,4h10c0.55078,0 1,0.44922 1,1v37.35938l-4.81641,-3.53125c-0.70703,-0.51953 -1.65625,-0.51953 -2.36719,0l-4.81641,3.53125v-37.35937c0,-0.55078 0.44922,-1 1,-1zM12,6h2v36.35938c0,0.75781 0.41797,1.44141 1.09375,1.78125c0.67969,0.34375 1.48047,0.27734 2.08984,-0.16797l4.81641,-3.53516l4.81641,3.53516c0.35156,0.25781 0.76563,0.38672 1.18359,0.38672c0.30469,0 0.61719,-0.07031 0.90625,-0.21875c0.67578,-0.33984 1.09375,-1.02344 1.09375,-1.78125v-36.35937h19c0.55078,0 1,0.44922 1,1v39c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1v1c0,0.55078 -0.44922,1 -1,1h-37c-0.61719,0 -1.33984,0.22266 -2,0.63281v-2.63281c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1v-38c0,-1.10156 0.89844,-2 2,-2zM52,10h1c0.55078,0 1,0.44922 1,1v46c0,0.55078 -0.44922,1 -1,1h-41c-1.10156,0 -2,-0.89844 -2,-2c0,-1.24219 1.39063,-2 2,-2h37c1.65234,0 3,-1.34766 3,-3zM33,20c-0.55078,0 -1,0.44531 -1,1c0,0.55469 0.44922,1 1,1h10c0.55078,0 1,-0.44531 1,-1c0,-0.55469 -0.44922,-1 -1,-1zM33,24c-0.55078,0 -1,0.44531 -1,1c0,0.55469 0.44922,1 1,1h4c0.55078,0 1,-0.44531 1,-1c0,-0.55469 -0.44922,-1 -1,-1zM33,28c-0.55078,0 -1,0.44531 -1,1c0,0.55469 0.44922,1 1,1h7c0.55078,0 1,-0.44531 1,-1c0,-0.55469 -0.44922,-1 -1,-1zM15,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1zM20,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1zM25,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1zM30,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1zM35,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1zM40,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1zM45,46c-0.55078,0 -1,0.44531 -1,1v2c0,0.55469 0.44922,1 1,1c0.55078,0 1,-0.44531 1,-1v-2c0,-0.55469 -0.44922,-1 -1,-1z"></path></g></g>
        </symbol>
        <symbol id='hashtag' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
        </symbol>
        <symbol id='x-mark' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </symbol>
        <symbol id='funnel' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </symbol>
        <symbol id='arrows-up-downs' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </symbol>
        <symbol id='chat-bubble-oval-left' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </symbol>
        <symbol id='ellipsis-vertical' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </symbol>
        <symbol id='user-circle' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </symbol>
        <symbol id='arrow-up-tray' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </symbol>
        <symbol id='plus-circle' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </symbol>
      </svg>
    </div>
  )
}
