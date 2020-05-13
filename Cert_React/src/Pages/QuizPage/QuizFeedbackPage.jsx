import React, {useEffect} from 'react';
import Chart from 'chart.js';

import nl2br from 'react-newline-to-break';
import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./QuizPage.css";

import {language} from '../../config/tasks.js';




function QuizFeedbackPage(props){

	console.log(props);
	const {slides, answersSubmitted} = props;

	let totalQuestions = 0; 
	let totals = [0,0,0,0]; 
	let correctCount = [0,0,0,0];

	const emotions = language.getEmotionStringsEnglish();

	for(let i = 0; i < slides.length; i++){
		if(slides[i].type == "QuizPage"){
			
			if(emotions[answersSubmitted[i]] == slides[i].params.emotion){
				correctCount[answersSubmitted[i]]++;
			}

			totalQuestions++;
			switch(slides[i].params.emotion){
				case "happy":
					totals[3]++;
					break;
				case "sad":
					totals[1]++;
					break;
				case "scared":
					totals[2]++;
					break;
				case "angry":
					totals[0]++;
					break;
				case "no emotion":
					break;
				default:
					console.log("error found incorrect emotion for quiz, slide",i);
			}
		}
	}

	let data = [
		(correctCount[0] / totals[0]) * 100,
		(correctCount[1] / totals[1]) * 100,
		(correctCount[2] / totals[2]) * 100,
		(correctCount[3] / totals[3]) * 100,
	];

	useEffect(()=>{
		var ctx = document.getElementById('myChart');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: emotions,
		        datasets: [{
		            data: data,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
    	        legend: {
                    display: false
                },
		        scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value) {
                                return value + "%";
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "% correct answers"
                        }
                    }]
		        },
		        tooltips: {
                  	enabled: true,
                  	mode: 'single',
                  	callbacks: {
                    	label: function(tooltipItem, data) {
	                        var allData = data.datasets[tooltipItem.datasetIndex].data;
	                        var tooltipData = allData[tooltipItem.index];
	                        return "Correct: " + tooltipData + "%";
                    	}
                	}
            	}
		    }
		});
		return () => {
			myChart.destroy();
		}
	});

	return (
		<div className={classes.container}>
			<h1 className={globalStyle.header}>{nl2br(language.quizEnd)}</h1>
			<div className={classes.feedback}>
				<div className={classes.chartContainer}>
					<canvas id="myChart"></canvas>
				</div>
				<div className={classes.pointers}>
					{
						emotions.map((emotion, i)=>{
							return <p key={i}>{data[i] > 50 ? language.youDidReallyWellAt[emotions[i]] : language.weWillWorkOn[emotions[i]]}</p>
						})
					}
				</div>
			</div>
		</div>
	);
}



export default QuizFeedbackPage;