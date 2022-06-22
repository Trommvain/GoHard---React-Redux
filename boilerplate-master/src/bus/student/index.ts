// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { studentActions } from './slice';
import { Student } from './types';

export const useStudent = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student);

    const updateProfile = (data: Student) => dispatch(studentActions.setStudent(data));

    return {
        student,
        updateProfile,
    };
};
