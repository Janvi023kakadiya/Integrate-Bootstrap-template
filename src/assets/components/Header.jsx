// import headerImage from 'https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg';

function Header({ scrollToWineList }) {
  return (
    <div className="header" style={{ backgroundImage: `url()` }}>
      <h1>Welcome to Our Winery</h1>
      <button onClick={scrollToWineList}>Explore Wines</button>
    </div>
  );
}

export default Header;
