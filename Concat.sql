 

SELECT DISTINCT t.tag 
                
FROM
(
    SELECT  CONCAT('<a href="', tag, '.htm" class="w3-btn w3-white w3-border w3-border-grey w3-round-xlarge">', tag, '</a>' ) AS "Tag" 
    FROM [SAT5000].[dbo].[PronounceNames] 
) t


  