import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          <Route path='/welcome/*' element={<Welcome />} />
          <Route exact path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book

/*
useHistory() does not exist anymore. Instead we use useNavigation:

v5 -> const history = useHistory();
   -> history.push('/welcome')
   -> history.replace('/welcome');

v6 -> const navigate = useNavigate();
   -> navigate('/welcome')
   -> navigate('welcome', { replace: true });
   -> navigate(-1)
   -> navigate(1)
*/

/* usePrompt() and <Prompt /> don't exist yet in v6. */