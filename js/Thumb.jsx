const React = require('react');
const { string} = React.PropTypes

const Thumb = function(props) {
  return (
    <div className="items">
      <img src="http://placehold.it/140x100" />
      <p>${props.price}</p>
      <p>{props.productName}</p>
    </div>
  )
}

Thumb.propTypes = {
  price: string.isRequired,
  productName: string.isRequired,
}


module.exports = Thumb;