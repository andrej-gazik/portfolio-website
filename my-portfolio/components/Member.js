import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*
interface Props {
	id: string;
	name: string;
	socialId: string;
	link: string;
}
*/
function Member(props) {
	return (
		<div>
			<Image
				src={`/assets/portfolio/${props.id}.svg`}
				alt={props.name}
				width={1300}
				height={1500}
			/>
			<div className='text-2xl xl:text-3xl'>
				<Link href={props.link}>
					<a target='_blank'>{props.socialId}</a>
				</Link>
			</div>
		</div>
	);
}

export default Member;
