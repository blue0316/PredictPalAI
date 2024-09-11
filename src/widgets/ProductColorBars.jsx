// components
import Spring from '@components/Spring';
import LabeledProgress from '@ui/LabeledProgress';
import DraggableScrollContainer from '@components/DraggableScrollContainer';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const ProductColorBars = () => {
    const {theme} = useThemeProvider();
    const trackColor = theme === 'light' ? 'body' : 'border';

    const data = [
        {value: 18, color: 'electro'},
        {value: 12, color: 'blue'},
        {value: 10, color: 'grass'},
        {value: 84, color: 'neon-green'},
        {value: 93, color: 'orange'},
        {value: 28, color: 'salmon'},
        {value: 15, color: 'purple'},
        {value: 30, color: 'red'},
        {value: 56, color: 'pink'},
        {value: 12, color: 'light-azure'},
        {value: 35, color: 'azure'},
        {value: 77, color: 'accent'},
        {value: 45, color: 'olive'},
        {value: 23, color: 'pastel-blue'},
    ]


    return (
        <Spring className="card card--side-shadow d-flex flex-column g-20">
            <h3 style={{padding: '30px 30px 0'}}>T-Shirt Colors</h3>
            <DraggableScrollContainer wrapperEL="ul"
                                      className="d-flex justify-content-between g-10"
                                      style={{padding: '0 30px 20px'}}>
                {
                    data.map((item, index) => (
                        <LabeledProgress key={index}
                                         label={item.value}
                                         value={item.value}
                                         barColor={item.color}
                                         trackColor={trackColor}
                        />
                    ))
                }
            </DraggableScrollContainer>
        </Spring>
    )
}

export default ProductColorBars