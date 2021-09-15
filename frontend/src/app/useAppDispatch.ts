import { useDispatch } from 'react-redux';
import { AppDispatch } from '../core/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
