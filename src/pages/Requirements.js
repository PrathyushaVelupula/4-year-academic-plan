import React from 'react';
import {
    Card, CardBody,
    Heading,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

function Requirements(props) {
    return (
        <Stack>

            <Card>
                <CardBody>
                    <Heading as='h2' size='xl' noOfLines={1}>
                        General Education Requirements
                    </Heading>
                        <Text fontSize="xl">
                            All department majors must satisfy the university and appropriate school or college general education requirements. All mathematics courses may be used to meet the university’s general education breadth of study requirement in natural sciences and mathematics.
                        </Text>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading as='h2' size='xl' noOfLines={1}>
                        Satisfactory/Unsatisfactory Restrictions
                    </Heading>
                    <Text fontSize="xl">
                        All department majors may not take mathematical and computer sciences courses on a satisfactory/unsatisfactory basis. Students considering graduate study should consult with their advisers about taking work on a satisfactory/unsatisfactory basis.
                    </Text>
                </CardBody>
            </Card>




            <Card>
                <CardBody>
                    <Heading as='h2' size='xl' noOfLines={1}>
                        Degree Requirements
                    </Heading>
                    <Text fontSize="xl">
                        All courses of the department presented to meet the degree requirements must be completed with a grade of C- or better. At least four courses numbered 3000 or above must be taken in residence. Students must have a 2.0 grade point average in the computer science courses completed.
                        <br/><br/>
                        A minimum grade of C- is required to meet the prerequisite requirement for any course except with permission of the department.
                        <br/><br/>
                        Students who are ready to begin their program with CMP SCI 2250 Programming and Data Structures, will be granted credit for CMP SCI 1250, Introduction to Computing, once they complete CMP SCI 2250 with a grade of C- or better.
                        <br/><br/>
                        Note: Courses that are prerequisites for higher-level courses may not be taken for credit or quality points if the higher-level course has been satisfactorily completed.
                    </Text>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading as='h2' size='xl' noOfLines={1}>
                        Degree Requirements in Computer Science
                    </Heading>
                    <Text fontSize="xl">
                        Candidates for the B. S. Computer Science degree must complete the following work:
                    </Text>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Heading as='h3' size='md'>Computer Science Core</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            {/*<TableCaption ></TableCaption>*/}
                            <Thead>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Name</Th>
                                    <Th isNumeric>Credit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>CMP SCI 1000</Td>
                                    <Td>Computer Science Experiences</Td>
                                    <Td isNumeric>1</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 1250</Td>
                                    <Td>Introduction to Computing</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 2250</Td>
                                    <Td>Programming and Data Structures</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 2261</Td>
                                    <Td>Object-Oriented Programming</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 2700</Td>
                                    <Td>Computer Organization and Architecture</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 2750</Td>
                                    <Td>Linux Environment and Programming</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 3010</Td>
                                    <Td>Web Full Stack Development</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 3130</Td>
                                    <Td>Design and Analysis of Algorithms</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 4250</Td>
                                    <Td>Programming Languages</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 4280</Td>
                                    <Td>Program Translation Project</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 4500</Td>
                                    <Td>Introduction to the Software Profession</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>CMP SCI 4760</Td>
                                    <Td>Operating Systems</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading as='h3' size='md'>Computer Science Electives</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            {/*<TableCaption ></TableCaption>*/}
                            <Thead>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Name</Th>
                                    <Th isNumeric>Credit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Select five more elective computer science courses, numbered above 3000.	</Td>
                                    <Td isNumeric>15</Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading as='h3' size='md'>Mathematics and Statistics</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            {/*<TableCaption ></TableCaption>*/}
                            <Thead>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Name</Th>
                                    <Th isNumeric>Credit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>MATH 1320</Td>
                                    <Td>Introduction to Probability and Statistics</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>MATH 1800</Td>
                                    <Td>Analytic Geometry and Calculus I</Td>
                                    <Td isNumeric>5</Td>
                                </Tr>
                                <Tr>
                                    <Td>MATH 1900</Td>
                                    <Td>Analytic Geometry and Calculus II</Td>
                                    <Td isNumeric>5</Td>
                                </Tr>
                                <Tr>
                                    <Td>MATH 2450</Td>
                                    <Td>Elementary Linear Algebra</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>
                                <Tr>
                                    <Td>MATH 3000</Td>
                                    <Td>Discrete Structures</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading as='h3' size='md'>Additional Skills</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            {/*<TableCaption ></TableCaption>*/}
                            <Thead>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Name</Th>
                                    <Th isNumeric>Credit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>ENGL 3130</Td>
                                    <Td>Technical Writing	</Td>
                                    <Td isNumeric>3</Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>





        </Stack>
    );
}

export default Requirements;
