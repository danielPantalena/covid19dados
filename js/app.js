$(document).ready(function () {
  $('.sidenav').sidenav();
});

async function fetchAPIData() {
  const response = await fetch('https://api.covid19api.com/total/country/brazil');
  const responseJSON = await response.json();
  document.querySelector('div.loading').style.display = 'none';
  document.querySelector('div.content').style.opacity = '1';
  document.querySelector('footer').style.opacity = '1';
  return responseJSON;
}

window.onload = async function () {
  const response = await this.fetchAPIData();
  console.log(response[101]);
  const chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: '',
    },
    axisY: [
      {
        title: '',
        lineColor: '#666666',
        tickColor: '#666666',
        labelFontColor: 'black',
        titleFontColor: 'black',
        suffix: '',
      },
    ],

    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: 'line',
        name: 'Casos',
        color: '#aaaaaa',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter((res) => res.Confirmed > 10000 && res.Date !== '2020-06-05T00:00:00Z')
          .map((res) => ({ x: new Date(res.Date), y: res.Confirmed })),
      },
      {
        type: 'line',
        name: 'Ativos',
        color: 'black',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter(
            (res) =>
              res.Confirmed > 10000 &&
              res.Date !== '2020-06-05T00:00:00Z' &&
              res.Date !== '2020-06-24T00:00:00Z',
          )
          .map((res) => {
            if (res.Confirmed > 692000) return { x: new Date(res.Date), y: res.Recovered };
            return { x: new Date(res.Date), y: res.Active };
          }),
      },
      {
        type: 'line',
        name: 'Recuperados',
        color: '#26a69a',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter(
            (res) =>
              res.Confirmed > 10000 &&
              res.Date !== '2020-06-05T00:00:00Z' &&
              res.Date !== '2020-06-24T00:00:00Z' &&
              res.Date !== '2020-06-20T00:00:00Z',
          )
          .map((res) => {
            if (res.Confirmed > 692000) return { x: new Date(res.Date), y: res.Active };
            return { x: new Date(res.Date), y: res.Recovered };
          }),
      },
      {
        type: 'line',
        name: 'Mortes',
        color: '#ee6e73',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter((res) => res.Confirmed > 10000 && res.Date !== '2020-06-24T00:00:00Z')
          .map((res) => ({ x: new Date(res.Date), y: res.Deaths })),
      },
    ],
  });
  chart.render();

  const casesNumber = document.getElementById('cases');
  const recoveredNumber = document.getElementById('recovered');
  const deathsNumber = document.getElementById('deaths');
  const lastUpdate = document.getElementById('lastUpdate');

  casesNumber.innerHTML = response[response.length - 2].Confirmed.toLocaleString('pt-BR');
  recoveredNumber.innerHTML = response[response.length - 2].Active.toLocaleString('pt-BR');
  deathsNumber.innerHTML = response[response.length - 2].Deaths.toLocaleString('pt-BR');
  lastUpdate.innerHTML = new Date(response[response.length - 2].Date).toLocaleDateString('pt-BR');

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
