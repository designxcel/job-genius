import icon from '../../assets/images/cruise.png'
const Delivery = () => {
    return (
        <div className='text-center space-y-4 h-96'>
            <div className='flex justify-center items-center'>
                <img className='w-28' src={icon} alt="" />
            </div>
            <h2 className='text-5xl tracking-wide font-bold'>All Order Over $60 Ship Free!</h2>
            <p className='max-w-5xl mx-auto'>Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam congue nisl
                accumsan ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac, sollicitudin quam quisque, at interdum dignissim, fringilla elit risus lorem, eu condimentum eros mollis.</p>
                <button className='btn bg-cyan-700 hover:bg-orange-500 text-white text-xl'>Discover</button>
        </div>
    );
};

export default Delivery;