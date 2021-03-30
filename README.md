# Group-10-Final-Project
# Stroke Prediction
AI and biotechnology have converged so much in the past few decades, so much so it may be used to predict if a patient with have a disease or medica emergency. Here we try to see if we can use machine learning to predict a stroke. A stroke is a medical emergency when a blood vessel that supply nutrients to the brain is hindered  by a clot or bursts. This prevents the brain tissues from getting necessary nutrients, which ultimately leads to brain cells dying in only a few minutes. This leads to difficulty walking, speaking and understanding, paralysis of the face and or extremities, and ultimately death if not treated immediately. According to the World Health Organization (WHO), strokes are the second leading cause of death in developed countries after heart disease. Here in the United States, it is the #5 cause of death and the leading cause of disability.

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
* Average glucose level (< 140)
* BMI (over 30 is considered obsese)
* Smoking status
* Has patient ever experienced a stroke (1 for yes and 0 for no)

### Group Responsibilities
* Jared handled the finding of the data, stored the data in a PostgreSQL database and connected it to a jupyter notebook to preprocess the data, and the neural network. He also proofread all the code for the machine learning, the visualizations in the notebook and tableau. He also edited the readme and wrote up the introduction wrote up the google slides presentation
* Salem handle the machine learning models other than the neural network, the tableau and jupyter notebook visualizations and the javascript app. 
* Ashley made a contribution of slides.
 
### Tools
* GitHub
* Python 3.7
* Jupyter Notebook
* PostgreSQL 11
* Scikit learn library
* Keras library
* Tensorflow
* Tableau
* SqlAlchemy
* Visual Studio Code
* Google Slides
* Stroke Prediction data from Kaggle and Analytics Vidhya
## Visualizations
[Stroke Prediction (Total Data Comparison) Dashboard](https://public.tableau.com/profile/amr.salem8189#!/vizhome/StrokePredictionDashboard/StrokePredictionDash?publish=yes)
[Stroke Prediction (Filtered Stroke Data) Dashboard](https://public.tableau.com/profile/jared.clarke#!/vizhome/Stoke_data_features/Dashboard2?publish=yes)
[Stroke Prediction App]( https://nypasha1928.github.io/Stroke_Prediction_App/)

[Stroke Presentation](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/Stroke_prediction_Final_presentation.pdf)
## Exploratory Data Analysis

#### Variance features Distribution

![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Variance%20features%20Distribution.png)

 * We have good distribution for age.
 * Avg glucose distribution is reasonable because the normal avg of blood in sugar is less than 140, but will keep this feature since diabetes can leave blood vessels vulnerable to a stroke


#### Stroke Pie Chart
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke_breakdown_total.png)
 * Only 1.9% percent of people in the data set had a stroke. 
 
#### Age
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/avg_age.png)
* Average age of people with strokes was ~ 68 years old. 

#### Gender
 ![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Gender.png)
  ![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/stroke_gender.png)
  * Female representation higher by 20% than Male in total data set
  * Females have higher incidences of strokes
 

#### Correlation with avg glucose level 
 ![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Age%20vs%20avg_glucose_level.png) 
  * Avg glucose level is high among old people.

#### BMI
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/BMI.png)
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/BMI%20vs%20Avg_glucose.png)
 * Body mass index is a value derived from the mass and height of a person.
 * Bmi and average glucose don't seem to correlate.

#### Stroke vs Ever Married
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/ever_married_stroke.png)
* More stroke cases among Married or was Married people.


#### Stroke vs Smoking status
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/stroke_smoke.png)
 * Being a former smoker seems to increase chances of stroke instead of someone who is a current smoker
 * More non-smokers have had strokes, but that could just mean they're over-represented in the data set. 


#### Stroke vs Residence type
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Stroke%20vs%20Residence%20type.png)
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/stroke_residence.png)
 * The total for the people who live in Urban are  50% percent higher that who live in Rural.
 * But when it came to having a stroke, they were nearly equal in number of occurences. 



#### Stroke vs Heart Disease
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/stroke_heart_disease.png)
 * Most people who have had a stroke did not have any heart disease, but that does not prevent it being an influential factor. 


#### Stroke vs Hypertension 
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/stroke_HYPERTENSION.png)
 * Same goes for hypertension as with heart disease. Non-strokes may just be over-represented 
#### Correlation 
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Heatmap%20correlation.png)
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Multiple_linear_regression.png)
* According to the heatmap BMI has a weak correlation to stroke, but has a strong correlation according to a multiple linear regression.

## Classification Models

##### SVM
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/svm_score.png)
* SVM was used since it could be used for classification and regression -- ideal since we want to find out if someone will have a stroke or not.
* Gave us high accuracy but no precision. We want to be sure there are more true negatives than false negatives.
##### Random Forset Classifier
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/random_forest_score.png)
* Random Forest was used since it likes to create decisions trees, but unforunately it gave us the same outcome as the SVM.
##### Logistic Regression 
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/Logistic%20Regression.png)
* Logistic regression in this case would be ideal 
* Logistic regression has a near perfect training score, but due to the number of rows in the data (over 35,000), it may have been too much for it to handle as it did no go through with the test data.
* used an ROC curve to illustrate
![image](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/ROC%20Curves%20for%20LR.png)

#### Neural Network
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/nn_nodes.png)
* Used a neural network to gain accuracy and precision.
* Chose the amount of nodes to discourage overfitting
![](https://github.com/nypasha1928/Group-10-Final-Project/blob/main/image/nn_accuracy.png)
* High accuracy and not too much loss.

