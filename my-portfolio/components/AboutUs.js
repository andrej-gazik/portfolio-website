import React from 'react';
import Member from './Member';

function AboutUs() {
	return (
		<section
			className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}
		>
			About Me
			<div className='container mx-auto px-11'>
				<p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'>
					Write something about myself here wht Iam doing{' '}
					<strong>Something in bold</strong>
				</p>
			</div>
			<div className='container mx-auto px-11 text-center mt-28'>
				<h2>My portfolio</h2>
				<div className='mt-2'></div>
				<div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
					<Member
						id={1}
						name='React'
						socialId='@React'
						link='https://reactjs.org/'
					></Member>
					<div> Member</div>
					<div> Member</div>
					<div> Member</div>
					<div> Member</div>
					<div> Member</div>
					<div> Member</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
