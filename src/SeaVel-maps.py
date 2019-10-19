#!/usr/bin/env python
# coding: utf-8

# In[8]:


import numpy as np
import pandas as pd

arr = np.array([[1,2,3],[1,2,3],[1,2,3]])

jsonResult = pd.DataFrame(arr).to_json(orient='values')

print(jsonResult)


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




