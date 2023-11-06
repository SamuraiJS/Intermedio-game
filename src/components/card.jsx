import './card.css';

function Card({num, face='', flip}) {
	return(
		<>
			<div className={`container ${face} ${flip}`} >
				<div className="cart">
					<div className="face front">
						<span className="num top-left">{num}</span>
						<span className="num bottom-right">{num}</span>
					</div>
					<div className="face downed">
						<img src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg" />
					</div>	
				</div>
			</div>
			
		</>
	)
}

export default Card;