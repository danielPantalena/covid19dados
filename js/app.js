$(document).ready(function () {
  $('.sidenav').sidenav();
});

async function fetchAPIData() {
  const response = await fetch(
    'https://api.covid19api.com/total/country/brazil',
  );
  const responseJSON = await response.json();
  document.querySelector('div.loading').style.display = await 'none';
  document.querySelector('div.content').style.display = await 'block';
  return responseJSON;
}

window.onload = async function () {
  const response = await this.fetchAPIData();
  console.log(response);
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
        color: '#666666',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter(res => res.Confirmed > 0)
          .map(res => ({ x: new Date(res.Date), y: res.Confirmed })),
      },
      {
        type: 'line',
        name: 'Recuperados',
        color: '#26a69a',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter(res => res.Confirmed > 0)
          .map(res => ({ x: new Date(res.Date), y: res.Recovered })),
      },
      {
        type: 'line',
        name: 'Mortes',
        color: '#ee6e73',
        showInLegend: false,
        axisYIndex: 1,
        dataPoints: response
          .filter(res => res.Confirmed > 0)
          .map(res => ({ x: new Date(res.Date), y: res.Deaths })),
      },
    ],
  });
  chart.render();

  const casesNumber = document.getElementById('cases');
  const recoveredNumber = document.getElementById('recovered');
  const deathsNumber = document.getElementById('deaths');
  const lastUpdate = document.getElementById('lastUpdate');

  casesNumber.innerHTML = response[
    response.length - 1
  ].Confirmed.toLocaleString('pt-BR');
  recoveredNumber.innerHTML = response[
    response.length - 1
  ].Recovered.toLocaleString('pt-BR');
  deathsNumber.innerHTML = response[response.length - 1].Deaths.toLocaleString(
    'pt-BR',
  );
  lastUpdate.innerHTML = new Date(
    response[response.length - 1].Date,
  ).toLocaleDateString('pt-BR');

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
