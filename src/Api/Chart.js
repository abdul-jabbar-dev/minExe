const datas = [12, 19, 3, 5, 2]
const data = {
    labels: ['Java', 'JS', 'React', 'HTML', 'PHP'],
    datasets: [
        {
            label: '# of Votes',
            fill: true,

            legend: {
                position: 'bottom'
            },
            data: datas,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                '#45C881',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
            ],


        },

    ],
    hoverOffset: 15
}



const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            animations: {
                tension: {
                    duration: 10000,
                    easing: 'linear',
                    from: .4,
                    to: .2,
                    loop: true
                }
            },
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "#45C881"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 26],
            fill: true,
            animations: {
                tension: {
                    duration: 4000,
                    easing: 'linear',
                    from: .5,
                    to: .2,
                    loop: true
                }
            },
            backgroundColor: "rgba(158, 104, 158,0.2)",
            borderColor: "#FF4069"
        }
    ],
    hoverOffset: 4
};
export { data, lineData } 