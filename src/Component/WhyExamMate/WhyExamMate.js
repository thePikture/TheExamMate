import './WhyExamMate.css'
import ads from '../../Image/ads.png';

const WhyExamMate = () => {
    return (
        <div>
            <div class="container pt-5 pb-5 exam-mate">
                <div className='row'>
                    <div className='col-lg-8 col-md-12'>
                        <h2>Why TheExamMate</h2> <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                            reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                            architecto. Fuga, sit.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                            reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                            architecto. Fuga, sit.</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                            reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                            architecto. Fuga, sit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                            reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                            architecto. Fuga, sit.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                            reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                            architecto. Fuga, sit.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 text-center'>
                        <img src={ads} alt="ads" width={300} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyExamMate;