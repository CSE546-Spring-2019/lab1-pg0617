#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ARGNUM 4
#define INPUT_FILE_ARG 1
#define SEARCH_STR_ARG 2
#define OUTPUT_FILE_ARG 3
#define MAX_STR_LEN 20
#define BUFFER_SIZE 100

int search_file(FILE *, const char *);
int check_for_match(const char *, const char *, int);

int main(int argc, char *argv[]){
	FILE *in_file, *out_file;
	char *search_str;
	int retVal = 0, filesize, num_matches;

	//check that args are correct
	if(argc != ARGNUM){
		printf("Incorrect number of arguments. Correct usage is count"
		" <input-filename> <search-string> <output-filename>\n");
		exit(1);
	}

	search_str = argv[SEARCH_STR_ARG];
	if(strlen(search_str) > MAX_STR_LEN){
		printf("Search string length too long. Max length is 20 bytes");
		exit(1);
	}

	//make sure you can open input file and output file
	in_file = fopen(argv[INPUT_FILE_ARG], "r");
	if(!in_file){
		printf("Error opening input file.\n");
		exit(1);
	}

	out_file = fopen(argv[OUTPUT_FILE_ARG], "w");
	if(!out_file){
		printf("Error opening output file.\n");
		exit(1);
	}

	//get the filesize
	fseek(in_file, 0, SEEK_END);
	filesize = ftell(in_file);
	fseek(in_file, 0, SEEK_SET);

	//call function that counts matches actual work
	num_matches = search_file(in_file, search_str);

	//output result to stdout
	printf("Size of file is %d\n", filesize);
	printf("Number of matches is %d\n", num_matches);

	//write to output file
	fprintf(out_file, "Size of file is %d\n", filesize);
	fprintf(out_file, "Number of matches is %d\n", num_matches);


	if(fclose(in_file)){
		printf("Error closing input file.\n");
		retVal = 1;
	}
	if(fclose(out_file)){
		printf("Error closing output file\n");
		retVal = 1;
	}

	return retVal;
}

/*
*  This function returns how many times the search string appears in the input file
*/
int search_file(FILE *in_file, const char *search_str){
	char buf[BUFFER_SIZE];
	int match_count=0, bytes_read, done=0, i;
	int len = strlen(search_str);

	//search for matches
	while(!done){
		bytes_read = fread(buf, 1, BUFFER_SIZE, in_file);
		if(bytes_read < BUFFER_SIZE){
			if(feof(in_file)){
				//EOF reached, so we are done after this execution of the loop
				done = 1;	
			}else{
				//otherwise, error occurred, end execution
				printf("Error reading from input file\n");
				break;
			}
		}

		//check matches in this buffer
	    for(i=0; i<(bytes_read - len + 1); i++){
	    	if(check_for_match(search_str, &(buf[i]), len)){
	    		match_count++;
	    	}
	    }

	    /*
	    *  move file pointer back 'len' bytes so the the last 'len' bytes of the 
	    *  old buffer are the first 'len' bytes of the next buffer
	    *  This handles the case where a match would overlap the buffer boundaries, at the
	    *  the cost of checking slightly fewer bytes in each buffer
	    */
	    fseek(in_file, -1 * (len - 1), SEEK_CUR);
	}

	return match_count;
}

/*
*  Compares two strings of length 'len'. Returns 1 if they match, 0 if they don'they
*  Assumes str1 and str2 are equal length
*/
int check_for_match(const char *str1, const char *str2, int len){
	int i;
	//just compare a byte at a time.
	for(i=0; i<len; i++){
		if(str1[i] != str2[i]){
			return 0;
		}
	}

	return 1;
}