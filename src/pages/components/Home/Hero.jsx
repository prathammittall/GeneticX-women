import Spline from '@splinetool/react-spline';

export default function Hero() {
	return (
		<div className="flex justify-center md:justify-between w-full h-[100vh]">
			<div className="part-1 w-[50vw] h-[100vh]">
				<div className="bg-black flex justify-center h-15 w-39 absolute z-1 bottom-[-95px] right-[50%] overflow-hidden"></div>
				<Spline scene="https://prod.spline.design/GOud1De8DJCvmcgK/scene.splinecode" className='none relative md:block' />
			</div>
			<div className="part-2 w-[50vw] bg-black text-white flex flex-col justify-center items-center relative bottom-21">
				<div className="text-center mb-8">
					<h1 className="text-7xl font-black leading-tight">
						<span className="block text-white drop-shadow-[0_0_8px_rgba(255,0,205,0.6)]">DECODE</span>
						<span className="block text-[#FF00CD] drop-shadow-[0_0_8px_rgba(115,78,255,0.5)]">YOUR DNA</span>
					</h1>
				</div>
				
				<p className="max-w-md text-center text-gray-300 mb-8 text-lg">
					Unlock the secrets of your genetic code with our cutting-edge technology
				</p>
				
				<div className="relative group">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
					<button className="relative px-10 py-4 bg-black text-xl font-bold rounded-full border-2 border-[#FF00CD] text-white tracking-wider overflow-hidden transition-all duration-500 ease-in-out hover:text-black hover:shadow-[0_0_25px_#FF00CD] group-hover:border-transparent">
						<span className="relative z-20"><a href="#pricing">GET STARTED</a></span>
						<span className="absolute inset-0 bg-gradient-to-r from-[#FF00CD] to-[#734EFF] z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
					</button>
				</div>
				
				<div className="mt-10 flex space-x-4">
					<div className="w-3 h-3 bg-[#FF00CD] rounded-full animate-pulse"></div>
					<div className="w-3 h-3 bg-[#734EFF] rounded-full animate-pulse delay-150"></div>
					<div className="w-3 h-3 bg-[#FF00CD] rounded-full animate-pulse delay-300"></div>
				</div>
			</div>
		</div>
	);
}