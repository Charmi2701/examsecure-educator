import SignIn from '../authentication/sign_in.js';
import AddData from '../components/addData/flaggedData/add_data'
import AdminHome from '../components/admin_home.js'
import ProctorPage from '../components/proctor/CardView/proctor_page.js';
import ImageDetail from '../components/proctor/image_detail.js';
import StudentPage from '../components/students/student_page'
import AddQuestions from '../components/addData/questions/add_questions'
import ProctorPageList from '../components/proctor/MediaListView/proctor_page_list.js';
import Trial from '../components/proctor/trial'

const routes = [
    {
        path: '/',
        component: AdminHome,
        title: 'Admin Home'
    },
    {
        path: '/signin',
        component: SignIn,
        title: 'Sign In'
    },
    // {
    //     path: '/adddata',
    //     component: AddData,
    //     title: 'Add Data'
    // },
    {
        path: '/proctorpage',
        component: ProctorPage,
        title: 'Proctor Page'
    },
    {
        path: '/proctorpagelist',
        component: ProctorPageList,
        title: 'Proctor Page List'
    },
    {
        path: '/imagedetail/:testnumber/:id',
        component: ImageDetail,
        title: 'Details of Triggered User'
    },
    {
        path: '/studentpage',
        component: StudentPage,
        title: 'Student Details Page'
    },
    {
        path: '/addquestions',
        component: AddQuestions,
        title: 'Adding Questions'
    },
    // {
    //     path: '/trial',
    //     component: Trial,
    //     title: 'Trial'
    // }
];

export default routes;