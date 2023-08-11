import {
    useNavigate,
    useParams,
    useLocation,
    useSearchParams,
} from "react-router-dom";
export const AppUseParam = () => useParams();
export const useAppNavigate = () => useNavigate();
export const useAppLocation = () => useLocation();
export const useAppSearchParams = () => useSearchParams();
