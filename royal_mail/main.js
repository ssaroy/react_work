import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

// colours
var color = 'rgb(219,54,51)';

// header
var logo = '';

// nav
var navData = [
  {id: 1, title: 'Jobs', url: '#'},
  {id: 2, title: 'Advice', url: '#'},
  {id: 3, title: 'About', url: '#'},
  {id: 4, title: 'Contact', url: '#'}
]

// banner
var image = './assets/banner-large.jpg';

// article
var title = 'About us';
var body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dolor feugiat cursus lobortis. Maecenas vel fringilla ligula, nec fermentum velit. Cras vel tellus in libero malesuada interdum. Suspendisse nec lorem id metus maximus dignissim. Aenean pellentesque tortor vel consequat varius. Vivamus quis porttitor nulla, ut facilisis lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean erat sapien, condimentum sit amet convallis tempus, pulvinar a nibh. Ut pretium malesuada aliquam. Sed nec nulla sit amet neque consectetur malesuada. Ut non dui at arcu tincidunt gravida. Nulla eros nibh, sodales a cursus vitae, hendrerit eget enim. In non turpis mi. Aliquam erat volutpat. Donec rutrum a ligula in rutrum. </br></br>Nam varius dolor eget diam varius pellentesque. Pellentesque quis risus nec libero laoreet varius. Vestibulum elit ex, sollicitudin eu libero ac, dictum pretium augue. Cras tortor mauris, lobortis vel porta eu, pharetra blandit erat. Vestibulum eu enim a ligula egestas faucibus. Pellentesque in nisl auctor, euismod nibh eu, porttitor tortor. Sed eget iaculis elit. In hac habitasse platea dictumst. Vestibulum sit amet molestie augue. Nullam a ultrices eros. Fusce vestibulum venenatis quam vitae aliquam. Etiam non nunc ac felis iaculis blandit in a odio. </br></br>Mauris gravida rhoncus consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut scelerisque vel ante vitae rutrum. Fusce libero nunc, pellentesque nec pretium quis, scelerisque at ligula. Nulla vitae accumsan magna. Vivamus a neque laoreet, feugiat tortor vitae, tempus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. </br></br>Maecenas ullamcorper nibh nisl, vel feugiat ante rhoncus id. Nulla feugiat nunc sed mi consequat vehicula. Morbi elit magna, lobortis id lectus in, ullamcorper tincidunt mauris. Donec suscipit lacus mauris, sed molestie turpis vehicula viverra. Nulla semper iaculis ex vel maximus. Cras at congue velit. Integer pharetra eros varius ligula tempor feugiat. In ipsum tellus, auctor et ultricies ut, pulvinar a nisi. Ut libero leo, facilisis ut diam a, mattis blandit odio. Phasellus tristique nisl sed odio tincidunt, ut imperdiet sem consequat. Cras ac nibh dignissim, mattis tellus eget, luctus augue. Vestibulum at laoreet mi. Sed in elit pretium, rhoncus neque eu, vestibulum elit. Donec tincidunt condimentum velit nec molestie. Nunc sit amet eleifend erat. Pellentesque nunc tellus, dapibus blandit mi non, placerat rhoncus nisi.';

// insights
var insights = [
  {id: 1, title: 'Find new customers', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dolor ugiat cursus lobortis.'},
  {id: 2, title: 'Raise your reputation', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dolor ugiat cursus lobortis.'},
  {id: 3, title: 'Expand overseas', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dolor ugiat cursus lobortis.'},
  {id: 4, title: 'Save time and money', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dolor ugiat cursus lobortis.'}
]

var divStyle = {
  margin: '0 auto',
  width: '1000px'
}

// footer
var footer = [
  {id: 1, title: 'Cookie policy', url: '#'},
  {id: 2, title: 'Privacy policy', url: '#'},
  {id: 3, title: 'Terms and conditions', url: '#'},
  {id: 4, title: 'Accessibility statement', url: '#'}
]

ReactDOM.render(
  <div>
    <Header logo={logo} color={color}/>
    <Nav navItems={navData} />
    <Banner image={image} />
    <div style={divStyle}>
      <Article title={title} body={body}/>
      <Sidebar data={insights}/>
    </div>
    <Footer data={footer}/>
  </div>,
  document.getElementById('app')
)
