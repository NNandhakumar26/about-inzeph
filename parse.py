import re
import sys

def check_tags(filename):
    with open(filename, 'r') as f:
        content = f.read()

    # Extract the JSX part
    match = re.search(r'<script type="text/babel"[^>]*>(.*?)</script>', content, re.DOTALL)
    if not match:
        print("No script found")
        return
    jsx = match.group(1)
    
    # We can try to strip JS code to see tags
    # A simple tag stack approach
    tags = []
    
    # Just use node and acorn
    
