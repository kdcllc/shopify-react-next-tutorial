import { EmptyState, Layout, Page, TextStyle } from '@shopify/polaris';
import AnnotatedLayout from './annotated-layout';
// import {TitleBar} from '@shopify/app-bridge-react';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
    state = { open: false };
    render() {
        return (
            <Page>
                <TitleBar
                    primaryAction={{
                       content: 'Select products',
                       onAction: () => this.setState({ open: true }),
                    }}
                />

                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    open={this.state.open}
                    onSelection={(resources) => this.handleSelection(resources)}
                    onCancel={() => this.setState({ open: false })}
                />

                <Layout>
                    <EmptyState
                        heading="Select products to start"
                        action={{
                            content: 'Select products',
                            onAction: () => this.setState({ open: true }),
                        }}
                        image={img}
                    >
                        <p>Select products to change their price temporarily.</p>
                    </EmptyState>
                    {/* <AnnotatedLayout></AnnotatedLayout> */}
                </Layout>
            </Page>
        );
    }

    handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({ open: false });
        console.log(resources);
    };
}


export default Index;