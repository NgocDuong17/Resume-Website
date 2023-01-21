import logo_school from './images/but.png'
const CuaEducation =()=>{
    return(
        <div>
            <ul className = 'education'>
                <li>
           <h1 className = "mycolor">Education</h1>
           <h2>S P Jain School of Global Management, Australia</h2>
           <ul>
                <li>2020 - now</li>
                <li>Major : Data Science</li>
                <li>GPA : 3.6/4.3</li>
            </ul>
        
           <h2>Foreign Trade University, Vietnam</h2>
           <ul>
                <li>2019 - 2020</li>
                <li>Major : External Economy</li>
                <li>GPA : 3.0/4.0</li>
            </ul>
                </li>
            <li><img className = 'img3' src ={logo_school} alt = ''/> </li>
            </ul>


            <h1 className = 'hello' >Project</h1>
            <ul className = 'project'>
            <li><h2>Exam Performance </h2>
            <p>In this project, we used JMP and Excel to clean the dataset as well 
                as visualize data to show relationship among the columns. It had developed a better understanding of some 
                main factors which affect students' exam scores to reach a more accurate assessment results.</p>
            </li>

            <li><h2>Wine Quality </h2>
            <p>Explore how the attributes of this dataset contribute to the quality
                of wine. What we do is generating models from Logistic Regression, Decision Tree, KNN and SVM to find out which 
                one is the most useful in classifying type of wine based on features given in the dataset (Mainly used Python).
            </p>
            </li>

            <li><h2>Portfolio SPA </h2>
            <p>Used React Router and Recharts as the main requirements to make a single page application. Moreover, we have 
                searched for various libs of react router and others to make the portfolio more appealing.
            </p>
            </li>           
            </ul>

        </div>
    )
}

export default CuaEducation