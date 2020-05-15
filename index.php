<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="tableStyle.css">
    <title>HRPeepsource v1.0</title>
    <script type="text/javascript" src="navController.js"></script>
</head>

<body>
    <header>
        <div class="header-bar">
            <div>
                <img src="pics/personIcon.png" alt="">
            </div>
            <div>
                <h1>HRPeepsource</h1>
            </div>
            <div>
                <p>YAVAPAI GAMING AGENCY 2020</p>
            </div>
        </div>
        <div class="header-shadow-bar"></div>
    </header>
    <main>
        <div class="main-grid">
            <div class="box1">
                <div class="list">
                    <div><a onclick="myFunction('detailDiv')" href="#">DETAIL</a></div>
                    <div><a onclick="myFunction('performanceDiv')" href="#">PERFORMANCE</a></div>
                    <div><a onclick="myFunction('contactsDiv')" href="#">CONTACTS</a></div>
                    <div><a onclick="myFunction('wagesDiv')" href="#">WAGES</a></div>
                    <div><a onclick="myFunction('taxesDiv')" href="#">TAXES</a></div>
                    <div><a onclick="myFunction('eeoDiv')" href="#">EEO</a></div>
                    <div><a onclick="myFunction('emergancyDiv')" href="#">EMERGANCY</a></div>
                    <div><a onclick="myFunction('seperationsDiv')" href="#">SEPERATIONS</a></div>
                    <div><a href="#">REPORTS</a></div>
                </div>
            </div>
            <div class="box2">

                <div class="search-section">
                    <div>
                        <p>Search by last name</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search...">
                    </div>
                </div>

                <table>
                     <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>SSN</th>
                        <th>Employee ID</th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Hire Date</th>
                        <th>Job Title</th>
                    </tr>
                    <?php
                    $row = 0;
                    if (($handle = fopen("C:\Users\carrilloc.YGA\Desktop\HrData\hrData.csv", "r")) !== FALSE) {
                        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                            ?>
                            <tr>
                            <?php
                            $num = count($data);

                            for ($c = 0; $c < $num - 21; $c++) {
                                ?>
                                <td>
                                <?php
                                echo $data[$c];
                                ?>
                                </td>
                                <?php
                            }
                            ?>
                            </tr>
                            <?php
                            $row++;
                        }
                        fclose($handle);
                    }
                    ?>
                </table>

            </div>
            <div class="box3">

                <div id="detailDiv">
    
                </div>
                <div id="performanceDiv">
                    
                </div>
                <div id="contactsDiv">
    
                </div>
                <div id="wagesDiv">
                    
                </div>
                <div id="taxesDiv">
    
                </div>
                <div id="emergancyDiv">
                    
                </div>

                <div id="seperationsDiv">
    
    </div>
    <div id="eeoDiv">
        
    </div>

            </div>
        </div>
    </main>
    <footer>

    </footer>

    
</body>

</html>