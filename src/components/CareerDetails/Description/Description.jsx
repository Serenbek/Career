import React from 'react';
import scss from './Description.module.scss'

function Description(props) {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div>
                    <h1>Job Description</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div>
                    <h1>Key Responsibilities</h1>
                    <ul>
                        <li>Working with agency for design drawing detail, quotation and local production</li>
                        <li>Produce window displays, signs, interior displays, floor plans and special promotions displays</li>
                        <li>Change displays to promote new product launches and reflect festive or seasonal themes</li>
                        <li>Planning and executing the open/renovation/ closing store procedure</li>
                        <li>Follow‐up store maintenance procedure and keep updating SKU In & Out</li>
                        <li>Monitor costs and work within budget</li>
                        <li>Liaise with suppliers and source elements</li>
                    </ul>
                </div>
                <div>
                    <h1>Why You'll Love Working Here</h1>
                    <ul>
                        <li>Working with agency for design drawing detail, quotation and local production</li>
                        <li>Produce window displays, signs, interior displays, floor plans and special promotions displays</li>
                        <li>Change displays to promote new product launches and reflect festive or seasonal themes</li>
                        <li>Planning and executing the open/renovation/ closing store procedure</li>
                        <li>Follow‐up store maintenance procedure and keep updating SKU In & Out</li>
                        <li>Monitor costs and work within budget</li>
                        <li>Liaise with suppliers and source elements</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Description;