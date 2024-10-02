// components
import Spring from '@components/Spring';
import ReviewItem from '@components/ReviewItem';
import TabButton from '@ui/TabButton';
import ScrollContainer from '@components/ScrollContainer';
import AddFormContainer from '@components/AddFormContainer';
import CustomRating from '@ui/CustomRating';

// hooks
import {useState, useRef, useEffect} from 'react';
import useMeasure from 'react-use-measure';
import {useForm, Controller} from 'react-hook-form';

// utils
import classNames from 'classnames';
import dayjs from 'dayjs';

// data placeholder
import reviews from '@db/reviews';

const Reviews = ({standalone, wrapperClass}) => {
    const Wrapper = standalone ? Spring : 'div';
    const [isFormOpen, setIsFormOpen] = useState(false);
    const {control, handleSubmit, formState: {errors}, register, reset} = useForm({
        defaultValues: {
            title: '',
            text: '',
            rating: 5
        }
    });
    const [activeTab, setActiveTab] = useState('latest');
    const [headerRef, {height: headerHeight}] = useMeasure();
    const [footerRef, {height: footerHeight}] = useMeasure();
    const trackRef = useRef(null);

    const onReset = () => {
        reset();
        setIsFormOpen(false);
    }

    const onSubmit = (data) => {
        // do something with data
        onReset();
    }

    const sortedData = [...reviews];

    const getReviews = () => {
        if (activeTab === 'latest') {
            return sortedData.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
        } else {
            return sortedData.sort((a, b) => (a.liked < b.liked) ? 1 : -1);
        }
    }

    useEffect(() => {
        trackRef.current && trackRef.current.scrollTo(0, 0);
    }, [activeTab, isFormOpen]);

    return (
        <Wrapper className={standalone ? 'card h-3' : wrapperClass}>
            <div className={`${standalone ? 'card_header' : ''} d-flex flex-column g-16`}
                 ref={headerRef}
                 style={{paddingBottom: 24}}>
                <h3>Reviews</h3>
                <div className="tab-nav col-2">
                    <TabButton title="Latest"
                               active={activeTab === 'latest'}
                               onClick={() => setActiveTab('latest')}/>
                    <TabButton title="Helpful"
                               active={activeTab === 'helpful'}
                               onClick={() => setActiveTab('helpful')}/>
                </div>
            </div>
            <ScrollContainer height={headerHeight + footerHeight}>
                <div className="track" style={{padding: standalone ? '0 var(--card-padding)' : 0}} ref={trackRef}>
                    {
                        standalone &&
                        <AddFormContainer open={isFormOpen}>
                            <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: 30}}>
                                <div className="d-flex flex-column g-10">
                                    <input className={classNames('field', {'field--error': errors.title})}
                                           type="text"
                                           placeholder="Title"
                                           {...register('title', {required: true})}/>
                                    <textarea className={classNames('field', {'field--error': errors.text})}
                                              placeholder="Your review"
                                              {...register('text', {required: true})}/>
                                </div>
                                <div className="d-flex align-items-center justify-content-between"
                                     style={{margin: '15px 0 20px'}}>
                                    <span className="label h6">Your rating:</span>
                                    <Controller name="rating"
                                                control={control}
                                                render={({field}) => (
                                                    <CustomRating readOnly={false}
                                                                  value={field.value}
                                                                  onChange={(value) => field.onChange(value)}/>
                                                )}/>
                                </div>
                                <div className="d-grid col-2 g-10">
                                    <button className="btn" type="submit">
                                        Submit
                                    </button>
                                    <button className="btn btn--outlined" type="reset" onClick={onReset}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </AddFormContainer>
                    }
                    <div className="d-flex flex-column g-24">
                        {
                            getReviews().map((review, index) => (
                                <ReviewItem review={review} index={index} key={review.id}/>
                            ))
                        }
                    </div>
                </div>
            </ScrollContainer>
            {
                standalone &&
                <div className={standalone ? 'card-padded' : 'pt-30'} ref={footerRef}>
                    <button className="btn w-100" onClick={() => setIsFormOpen(true)} disabled={isFormOpen}>
                        Leave a review
                    </button>
                </div>
            }
        </Wrapper>
    )
}

export default Reviews