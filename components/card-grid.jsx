import Card from "./card";
const CardGrid = () => {
    return (
        <>
            <div className="bg-slate-200  h-72"></div>
            <div className=' bg-slate-200 h-screen  relative'>
                <div className='grid grid-cols-4 absolute -top-60 gap-5 px-5 z-50  '>
                    {data.map(obj => (
                        <Card key={obj.id} title={obj.title} src={obj.src} alt={obj.title} />
                    ))
                    }
                </div>
            </div>
            <div className="bg-slate-200  h-48"></div>
        </>
    );
}

export default CardGrid;

export const data = [
    {
        id: 1,
        title: 'Gaming accessories',
        src: 'https://media.gamestop.com/i/gamestop/11164185/CyberPowerPC-Gamer-Master-AMD-Ryzen-7-5700G-AMD-Radeon-RX-6600-XT-16GB-RAM-500GB-SSD-2TB-HDD-Gaming-PC-GMA9240CPGV2',

    }, {
        id: 2,
        title: 'For your Fitness Needs',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg',

    }, {
        id: 3,
        title: 'Health & Personal Care',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg',

    }, {
        id: 4,
        title: 'Electronics',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg',

    }, {
        id: 5,
        title: 'AmazonBasics',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg',

    }, {
        id: 6,
        title: 'Find your ideal TV',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg',

    }, {
        id: 7,
        title: 'Beauty picks',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg',

    }, {
        id: 8,
        title: 'Shop Pet supplies',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg',

    },
]
