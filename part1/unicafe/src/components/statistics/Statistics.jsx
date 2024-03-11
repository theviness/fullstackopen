import StatisticLine from "./StatisticLine"
import Title from "../shared/Title"

const Statistics = ({good, neutral, bad}) => {
    const title = 'statistics'
    const total = good + neutral + bad
    const average = (good * 1 + neutral * 0 + bad * -1) / total
    const positive = ((good / total)*100)
    const transformedPositive = Number.parseFloat(positive).toFixed(1)
   
    if(total === 0) {
        return (
            <>
                <Title content={title} />
                <p>No feedback given</p>
            </>
        )
    }

   
    return (
        <>
            <Title content={title} />
            
            <table>
                <tbody>
                    <StatisticLine text={'good'} value={good}/>
                    <StatisticLine text={'neutral'} value={neutral}/>
                    <StatisticLine text={'bad'} value={bad}/>
                    <StatisticLine text={'all'} value={total}/>
                    <StatisticLine text={'average'} value={average}/>
                    <StatisticLine text={'positive'} value={transformedPositive + ' %'}/>
                </tbody>
            </table>
        </>
    )
}

export default Statistics