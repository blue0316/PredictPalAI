// components
import Spring from '@components/Spring';
import Testimonial from '@components/Testimonial';
import ScrollContainer from '@components/ScrollContainer';
import AddFormContainer from '@components/AddFormContainer';
import CustomRating from '@ui/CustomRating';

// hooks
import useMeasure from 'react-use-measure';
import {useForm, Controller} from 'react-hook-form';
import {useState, useEffect, useRef} from 'react';

// utils
import classNames from 'classnames';

const data = [
    {
        text: 'Wore these with my training tee and pods to a graduation bbq. Love the look and feel.',
        author: 'Jacob Sullivan',
        rating: 4.5,
    },
    {
        text: 'I\'m enjoying playing football!',
        author: 'Max Power',
        rating: 5,
    },
    {
        text: 'I\'m enjoying playing football!',
        author: 'Sunny Drew',
        rating: 5,
    }
]

const Testimonials = () => {
    const {register, handleSubmit, formState: {errors}, reset, control} = useForm({
        defaultValues: {
            text: '',
            author: '',
            rating: 5,
        }
    });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [ref, {height}] = useMeasure();
    const trackRef = useRef(null);

    const onReset = () => {
        reset();
        setIsFormOpen(false);
    }

    const onSubmit = (data) => {
        // do something with data
        onReset();
    }

    useEffect(() => {
        trackRef.current && trackRef.current.scrollTo(0, 0);
    }, [isFormOpen]);

    return (
        <Spring className="card height-w-2">
            <ScrollContainer height={height} isCompact>
                <div className="track" ref={trackRef}>
                    <AddFormContainer open={isFormOpen}>
                        <form className="card_header flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <textarea className={classNames('field', {'field--error': errors.text})}
                                      placeholder="Your comment"
                                      {...register('text', {required: true})}/>
                            <input className={classNames('field', {'field--error': errors.author})}
                                   type="text"
                                   placeholder="Your name"
                                   {...register('author', {required: true})}/>
                            <div className="flex items-center justify-between">
                                Rate:
                                <Controller name="rating"
                                            control={control}
                                            render={({field}) => (
                                                <CustomRating readOnly={false}
                                                              value={field.value}
                                                              onChange={(value) => field.onChange(value)}/>
                                            )}/>
                            </div>
                            <div className="grid col-2 gap-2.5">
                                <button className="btn" type="submit">Submit</button>
                                <button className="btn btn--outlined" type="reset" onClick={onReset}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </AddFormContainer>
                    {
                        data.map((item, index) => (
                            <Testimonial key={index} data={item} index={index}/>
                        ))
                    }
                </div>
            </ScrollContainer>
            <div className="card-padded" ref={ref}>
                <button className="btn w-full" onClick={() => setIsFormOpen(true)} disabled={isFormOpen}>
                    Add new comment
                </button>
            </div>
        </Spring>
    )
}

export default Testimonials