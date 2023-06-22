var rule = {
    title:'Missav',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    host:'https://missav123.com',
	searchUrl:'/cn/search/**',
    url:'/cn/fyclass?page=fypage',
    class_name:'今日热门&本周热门&本月热门&最近更新&新作上市&中文字幕&[素人]SIRO&[素人]LUXU&[素人]GANA&[素人]PRESTIGE&&[素人]S-CUTE&[素人]ARA&无码流出&[无码]FC2&[无码]HEYZO&[无码]东京热&[无码]一本道&[无码]Caribbeancom&[无码]Caribbeancompr&[无码]10musume&[无码]pacopacomama&[无码]Gachinco&[无码]XXX-AV&[无码]人妻斩&[无码]顽皮 4610&[无码]顽皮 0930&麻豆传媒&TWAV',//静态分类名称拼接
    class_url:'today-hot&weekly-hot&monthly-hot&new&chinese-subtitle&release&siro&luxu&gana&maan&scute&ara&uncensored-leak&fc2&heyzo&tokyohot&1pondo&caribbeancom&caribbeancompr&10musume&pacopacomama&gachinco&xxxav&marriedslash&naughty4610&naughty0930&madou&twav',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.grid.grid-cols-2 div&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
	搜索:'.grid.grid-cols-2 div&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:1,//是否启用全局搜索,p
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}

