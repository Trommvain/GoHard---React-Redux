// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { FormValuesTypes } from '../../view/pages/Lesson5';
import { studentActions } from './slice';

export const useStudent = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student);

    const updateProfile = (data: FormValuesTypes) => dispatch(studentActions.setStudent(data));

    return {
        student,
        updateProfile,
    };
};
