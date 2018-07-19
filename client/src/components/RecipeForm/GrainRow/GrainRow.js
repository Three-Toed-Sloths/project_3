import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import "./GrainRow.css";

const weightUnits = ['lbs', 'kg', 'oz', 'g'];

const GrainRow = props => (
<Row className="baseMaltInputRow">
    <Col xs={6}>
        <InputGroup>
            <FormControl type="text" class="baseMalt" placeholder="Malt Name"/>
        </InputGroup>
    </Col>
    <Col xs={6}>
        <InputGroup>
            <FormControl type="number" class="maltWeight" placeholder="Weight"/>
            <DropdownButton
                componentClass={InputGroup.Button}
                id="input-dropdown-addon"
                title="Units"
            >
                {weightUnits.map(unit => (
                    <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                ))}
            </DropdownButton>
        </InputGroup>
    </Col>
</Row>
)
    




export default GrainRow;