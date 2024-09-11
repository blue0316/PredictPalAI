// components
import PageHeader from '@layout/PageHeader';
import Error404 from '@components/Error404';

const PageNotFound = () => {
    return (
        <>
            <PageHeader title="Page not found" />
            <Error404/>
        </>
    )
}

export default PageNotFound