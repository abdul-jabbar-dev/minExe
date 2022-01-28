const optionsChart = {
    responsive: true,
    fillTextData: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'চলমান কোর্স',
            align: "start",
            font: {
                size: 18,
            }
        },
    },
};
const optionsChart1 = {
    responsive: true,
    fillTextData: true,
    labels: ['Java', 'React', 'HTML', 'PHP'],

    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'কোর্স ভিত্তিক শিক্ষার্থী',
            align: "start",
            font: {
                size: 18,
            }
        },
    },
};
const masterChart = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
        padding: 16
    },
    plugins: {
        padding: '16px',
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'ছাত্র বিশ্লেষণ',
            align: "start",
            font: {
                size: 18,
            }
        }
    },
};

export { optionsChart, masterChart, optionsChart1 }