const Footer = () => {
	return (
		<footer className='fixed bottom-1 right-1 text-xs text-center p-3'>
			Made by{' '}
			<a
				href='https://charliebdev.vercel.app/'
				target='_blank'
				rel='noreferrer'
				className='underline'
			>
				charliéb
			</a>{' '}
			with 🙏 to PokéAPI
		</footer>
	);
};

export default Footer;
