import React from "react";
import {Button, Card, Radio} from "antd";

export default class Q8 extends React.Component {
    state = {
        template_no: 1
    };

    saveData = () => {
        // console.log('Received values of form: ', values);
        localStorage.setItem("template_no", this.state.template_no);
        this.props.next();
    };

    onChange = (e) => {
        this.setState({
            template_no: e.target.value
        });
    };

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <div style={{fontSize: "2em", marginBottom: "0.5em"}}>
                    Select a template
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Radio.Group onChange={this.onChange} value={this.state.template_no}>
                        <Radio value={1}>
                            <Card style={{marginTop: "0.5em"}} hoverable cover={<img alt="img" src="/img/diamond.jpg" />}>
                                <Card.Meta title="Template 1" />
                            </Card>
                        </Radio>
                        <Radio value={2}>
                            <Card style={{marginTop: "0.5em"}} hoverable cover={<img alt="img" src="/img/diamond.jpg" />}>
                                <Card.Meta title="Template 2" />
                            </Card>
                        </Radio>
                        <Radio value={3}>
                            <Card style={{marginTop: "0.5em"}} hoverable cover={<img alt="img" src="/img/diamond.jpg" />}>
                                <Card.Meta title="Template 3" />
                            </Card>
                        </Radio>
                    </Radio.Group>
                </div>
                <div style={{fontSize: "1em", padding: "0.5em"}}>
                    You can customize and personalize it later
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button type="primary" onClick={this.props.prev}>Previous</Button>
                    <Button type="primary" onClick={this.saveData}>Next</Button>
                </div>
            </div>);
    }
}
