import React from 'react'

const Home = () => {
	let baseUrl = window.location.origin;
	return (
		<div className="container mx-auto max-w-[1440px]">
			<div className="m-4 md:m-16 lg:mx-28">
				<div className="sm:flex flex-row">
					<div className="basis-full md:basis-1/2 bg-zinc-100 flex flex-col justify-center px-8 pb-3">
						<div className='mb-6'>
							<h3 className='text-[36px] font-semibold heading-title'>Soul moon</h3>
							<span className='uppercase text-xs ms-16'>black and green</span>
						</div>
						<div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nulla recusandae voluptate eos ipsa exercitationem unde voluptatibus magnam molestias porro. Culpa nihil a saepe nesciunt. Cumque quis ab commodi aperiam.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga, itaque quis voluptate nisi adipisci dolorum? Quia, corporis. Modi corporis quibusdam, reprehenderit perferendis ipsum voluptatibus similique suscipit magni earum totam.
							</p>
						</div>
					</div>
					<div className="basis-full md:basis-1/2 p-8 md:p-12 lg:p-16 xl:p-16 bg-slate-900 object-contain">
						<img className='filter grayscale h-[300px] xl:h-[500px] w-full' src={`${baseUrl}/assets/images/img3.webp`} alt="image" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home