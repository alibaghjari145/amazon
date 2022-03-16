import { Carousel } from '@trendyol-js/react-carousel';
const BookCarousel = () => {
    return (
        <div className="bg-white  p-3 flex flex-col gap-5">
            <h3 className=" text-2xl font-bold ">Top Sellers in Books for you</h3>
            <Carousel show={6.5} slide={3} swiping={true}>
            {data.map(itm => (
                <img key={itm.id} src={itm.src} className='w-48 m-2 h-48  object-cover object-center'/>
            ))}
        </Carousel></div>
    );
}

export default BookCarousel;

export const data = [
    {
        id: 1,
        src: 'https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_SY200_.jpg',

    }, {
        id: 2,
        src: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY200_.jpg',

    }, {
        id: 3,
        src: 'https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg',

    }, {
        id: 4,
        src: 'https://m.media-amazon.com/images/I/91OmGflKYaL._AC_SY200_.jpg',

    }, {
        id: 5,
        src: 'https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY200_.jpg',

    }, {
        id: 6,
        src: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg',

    }, {
        id: 7,
        src: 'https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg',

    }, {
        id: 8,
        src: 'https://m.media-amazon.com/images/I/71slsnNNChL._AC_SY200_.jpg',

    }, {
        id: 9,
        src: 'https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY200_.jpg',

    }, {
        id: 10,
        src: 'https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_SY200_.jpg',

    }, {
        id: 11,
        src: 'https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_SY200_.jpg',

    }, {
        id: 12,
        src: 'https://m.media-amazon.com/images/I/711c-uf6AFL._AC_SY200_.jpg',

    }, {
        id: 13,
        src: 'https://m.media-amazon.com/images/I/81e4jgomhKL._AC_SY200_.jpg',

    }, {
        id: 14,
        src: 'https://m.media-amazon.com/images/I/81vTTD9oyjL._AC_SY200_.jpg',

    }, {
        id: 15,
        src: 'https://m.media-amazon.com/images/I/81a5KHEkwQL._AC_SY200_.jpg',

    }, {
        id: 16,
        src: 'https://m.media-amazon.com/images/I/91r5UtdC7tL._AC_SY200_.jpg',

    },
]
