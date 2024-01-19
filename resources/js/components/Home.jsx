import React, { useEffect } from 'react'

const Home = () => {
	let baseUrl = window.location.origin;
	useEffect(()=>{

	}, []);

	return (
		<div className="container mx-auto max-w-[1440px]">
			<div className="m-4 md:m-16 lg:mx-28">
				<div className="sm:flex flex-row">
					<div className="basis-full md:basis-1/2 bg-zinc-100 flex flex-col justify-center px-8 pb-4">
						<div className='mb-6'>
							<h3 className='text-[36px] font-yeseva uppercase'>Soul moon</h3>
							<span className='uppercase text-xs ms-16 font-yeseva'>black and green</span>
						</div>
						<div>
							<p className='tracking-widest line-clamp-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nulla recusandae voluptate eos ipsa exercitationem unde voluptatibus magnam molestias porro. Culpa nihil a saepe nesciunt. Cumque quis ab commodi aperiam.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga, itaque quis voluptate nisi adipisci dolorum? Quia, corporis. Modi corporis quibusdam, reprehenderit perferendis ipsum voluptatibus similique suscipit magni earum totam.
							</p>
						</div>
					</div>
					<div className="basis-full md:basis-1/2 p-10 md:p-12 lg:p-16 xl:p-16 bg-gray-950 object-contain">
						<img className='filter grayscale object-contain h-[300px] xl:h-[500px] w-full' src={`${baseUrl}/assets/images/bp1.jpg`} alt="image" />
					</div>
				</div>
			</div>
			<div className="photo-album mb-64 m-4 md:m-16 lg:mx-28">
				<div className="flex items-center my-14">
					<hr className="flex-grow border-t border-gray-800" />
					<span className="mx-4 font-yeseva text-3xl tracking-wider uppercase">Photo Album</span>
					<hr className="flex-grow border-t border-gray-800" />
				</div>
				<div className="bg-gray-900 mb-14">
					<div className="grid lg:grid-cols-3 gap-12 pl-10 pr-14 py-8 md:px-20 md:py-16">
						<div className='h-80 relative'>
							<img className='w-full h-3/4 filter grayscale absolute left-4' src={`${baseUrl}/assets/images/img4.webp`} alt="" />
							<img className='w-full h-3/4 filter grayscale absolute z-10 top-8 object-cover' src={`${baseUrl}/assets/images/bp4.jpg`} alt="" />
							<p className='absolute bottom-0 text-white album-name text-3xl w-full text-center'>The Album</p>
						</div>
						<div className='h-80 relative'>
							<img className='w-full h-3/4 filter grayscale absolute left-4' src={`${baseUrl}/assets/images/bp4.jpg`} alt="" />
							<img className='w-full h-3/4 filter grayscale absolute z-10 top-8 object-cover' src={`${baseUrl}/assets/images/img4.webp`} alt="" />
							<p className='absolute bottom-0 text-white album-name text-3xl  w-full text-center'>The Album</p>
						</div>
						<div className='h-80 relative'>
							<img className='w-full h-3/4 filter grayscale absolute left-4' src={`${baseUrl}/assets/images/bp4.jpg`} alt="" />
							<img className='w-full h-3/4 filter grayscale absolute z-10 top-8 object-cover' src={`${baseUrl}/assets/images/img5.webp`} alt="" />
							<p className='absolute bottom-0 text-white album-name text-3xl  w-full text-center'>The Album</p>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap gap-8 lg:gap-0'>
					<div className="basis-full lg:basis-3/4 lg:pr-16">
						<div className='flex'>
							<div className="flex flex-wrap md:flex-nowrap mb-8">
								<img className='w-full md:w-80 h-80 filter grayscale object-cover' src={`${baseUrl}/assets/images/img1.png`} alt="" />
								<div className='flex flex-col justify-center mx-8'>
									<h4 className='font-yeseva text-3xl mt-4 mb-4 lg:mb-8'>Lorem Ipsum</h4>
									<p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat accusantium error. Modi molestiae ad velit consectetur eaque necessitatibus accusantium et beatae ut consequatur doloremque excepturi obcaecati eum, in cupiditate?</p>
								</div>
							</div>
						</div>
						<div className='flex'>
							<div className="flex flex-wrap-reverse md:flex-nowrap">
								<div className='flex flex-col justify-center mx-8'>
									<h4 className='font-yeseva text-3xl mt-4 mb-4 lg:mb-8'>Lorem Ipsum</h4>
									<p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat accusantium error. Modi molestiae ad velit consectetur eaque necessitatibus accusantium et beatae ut consequatur doloremque excepturi obcaecati eum, in cupiditate?</p>
								</div>
								<img className='w-full md:w-80 h-80 filter grayscale object-cover' src={`${baseUrl}/assets/images/img1.png`} alt="" />
							</div>
						</div>
					</div>
					<div className="basis-full lg:basis-1/4 flex flex-col justify-between">
						<img className='w-full h-64 filter grayscale object-cover' src={`${baseUrl}/assets/images/img2.webp`} alt="" />
						<div className='mx-8 lg:mx-0'>
							<h5 className='font-yeseva text-2xl mb-3'>Loremip</h5>
							<p>Lorem ipsum dolor soribus nemo est dolor soribus nemo est.</p>
						</div>
						<img className='w-full h-64 filter grayscale object-cover' src={`${baseUrl}/assets/images/img3.webp`} alt="" />
					</div>
				</div>	
			</div>
		</div>
	)
}

export default Home