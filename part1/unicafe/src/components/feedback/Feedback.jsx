import Button from "../shared/Button"
import Title from "../shared/Title"

const Feedback = ({handleGoodClick, handleNeutralClick, handleBadClick}) => {
    const title = 'give feedback'
    
    return (
        <>
            <Title content={title} />
            <Button handleClick={handleGoodClick} text={'good'} />
            <Button handleClick={handleNeutralClick} text={'neutral'} />
            <Button handleClick={handleBadClick} text={'bad'} />
        </>
    )
}

export default Feedback