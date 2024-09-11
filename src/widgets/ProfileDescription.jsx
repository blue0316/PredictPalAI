// components
import Spring from '@components/Spring';

const ProfileDescription = () => {
    const placeholder = `Hi I'm Lottie Poole. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Vitae ultricies leo integer malesuada nunc vel risus. Amet risus nullam eget felis eget. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sit amet nulla facilisi morbi tempus iaculis. Pellentesque diam volutpat commodo sed egestas.`;

    return (
        <Spring className="card card-padded h-2 d-flex flex-column g-20">
            <h3>Description</h3>
            <div className="d-flex flex-column flex-1 g-30">
                <textarea className="field flex-1" defaultValue={placeholder}/>
                <div className="d-flex flex-column g-16">
                    <button className="btn">Update</button>
                    <button className="btn btn--outlined">Cancel</button>
                </div>
            </div>
        </Spring>
    )
}

export default ProfileDescription