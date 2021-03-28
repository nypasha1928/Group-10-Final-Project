# Group-10-Final-Project
# Stroke Prediction
A stroke is a medical emergency when a blood vessel that supply nutrients to the brain is hindered  by a clot or bursts. This prevents the brain tissues from getting necessary nutrients, which ultimately leads to brain cells dying in only a few minutes. This leads to difficulty walking, speaking and understanding, paralysis of the face and or extremities, and ultimately death if not treated immediately. According to th World Health Organization (WHO), strokes are the second leading cause of death in developed countries after heart disease. Here in the United States, it is the #5 cause of death and the leading cause of disability.

A few major risk factors for strokes are:
* Age - likelihood of a stroke increases with age. Especially for people over 65 -- though you can have a stroke at any age
* Gender - women tend to have more strokes than men and it seems to kill women more
* Hypertenison - high blood pressure
* High Cholesterol
* Smoking
* Diabetes
* Obesity - high BMI (over 30)
* Stress (work, marriage, location of residence)

For our final project, well use a dataset from kaggle to see if we can predict if someone will have a stroke based on the following variables:
* Gender
* Age
* Hypertension (yes or no)
* Heart Disease (yes or no)
* Has ever been married (yes or no)
* Work type (Private, self-employed, government job, etc.)
* Residence type (Urban or Rural
* Average glucose level
* BMI (over 30 is considered obsese)
* Smoking status
* Has patient ever experienced a stroke (1 for yes and 0 for no)

[Stroke Prediction Dashboard](https://public.tableau.com/profile/amr.salem8189#!/vizhome/StrokePredictionDashboard/StrokePredictionDash?publish=yes)
 
[Stroke Prediction App]( https://nypasha1928.github.io/Stroke_Prediction_App/)

## Exploratory Data Analysis

#### Variance features Distribution

![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Variance%20features%20Distribution.png)

 * We have good distribution for age .
 * Avg glucose distribution is reasonable because the normal avg of blood in sugar is less than 140 , that may be not good this feature will not be helpful to know if diabetes have correlation between diabetes and strokes


#### Stroke Pie Chart
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20Pie%20Chart.png)
 * Only 1.9% percent of people have Stroke . 
 

#### Gender
 ![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Gender.png)
  * Stroke cases in Female are higher by 20% than Male 
 

#### Correlation with avg glucose level 
 ![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Age%20vs%20avg_glucose_level.png) 
  * Avg glucose level is high among old people.

 ![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Bmi%20vs%20avg_glucose_level.png)
  * Bmi >40 have low avg glucose.

### BMI
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/BMI.png)
 * Body mass index is a value derived from the mass and height of a person.

#### BMI Boxplot
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Bmi%20Boxplot.png)
* We had many outliers.


#### Stroke vs  Ever Married
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20EverMarried.png)
* More stroke cases among Married or was Married people.


#### Stroke vs Smoking status
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Smoking%20Status.png)
 * Being a smoker or a fomerly smoker increases yout risk of having a stroke.


#### Stroke vs Residence type
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Residence%20type.png)
 * The Stroke cases for the people who live in Urban are  50% percent higher that who live in Rural .



#### Stroke vs Heart Disease
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Heart%20Disease.png)
 * Most people who have had a stroke do not have any heartdisease, but that does not prevent it being an influential factor. 


#### Stroke vs Hypertension 
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Hypertention.png)
 * 11% percent of the Stroke cases had Hypertension. 


### Classification Models

##### SVM
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/SVM.png)

##### Random Forset Classifier
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Random%20Forest%20Classifier.png)

##### Logistic Regression 
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Logistic%20Regression.png)

##### ROC Curves for Logistic Regression 
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/ROC%20Curves%20for%20LR.png)
