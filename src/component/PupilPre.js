import React , {Component}from "react";
import {Container, Row ,Col} from "react-bootstrap";

export class PupilPre extends Component{
    render(){
        const inputStyle = {
            fontFamily: "Arial Black",
            padding: "10px",
        }
        return(
            <div>
                 <Container fluid="md" className="container">
                    <Row >
                    <Col>
                        <form >
                            <label style={inputStyle}> Pupil Prescription:</label>
                        </form>
                    </Col>

                    <Col>
                        
                <select >
              <option value="">Select...</option>
            
              <option value="55">55</option>
            
              <option value="56">56</option>
            
              <option value="57">57</option>
            
              <option value="58">58</option>
            
              <option value="59">59</option>
            
              <option value="60">60</option>
            
              <option value="61">61</option>
            
              <option value="62">62</option>
            
              <option value="63" selected="">63 (Average / Don't Know)</option>
            
              <option value="64">64</option>
            
              <option value="65">65</option>
            
              <option value="66">66</option>
            
              <option value="67">67</option>
            
              <option value="68">68</option>
            
              <option value="69">69</option>
            
              <option value="70">70</option>
            
              <option value="71">71</option>
            
              <option value="72">72</option>
            
              <option value="73">73</option>
            
              <option value="74">74</option>
            
              <option value="75">75</option>
            
            </select>
                    </Col>
                    </Row>
                </Container>
           
               
                
            
            <div>
            <span >The distance between your pupils, select "Average / Don't Know" if you are unsure and we'll be in touch if necessary<p>For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please  call us on 01793 746601 to discuss your options.</p></span>
            </div>
           
            <hr></hr>
            </div>
        )
    }
}