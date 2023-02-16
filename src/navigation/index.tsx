import * as Page from './Pages';
import { Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Page.SearchPage />} />
      <Route path='/detail/:username' element={<Page.DetailPage />} />
    </Routes>
  );
};
